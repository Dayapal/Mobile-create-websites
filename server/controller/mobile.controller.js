import cloudinary from "../config/cloudinary.js";
import Mobile from "../model/mobile.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const createMobile = async (req, res) => {
    try {
        const { name, price, color, companyName, ram, camera } = req.body;
        if (!name || !price || !color || !companyName || !ram || !camera) {
            return res.status(404).json({
                success: false,
                message: "Please fill all fields"
            })
        }
        let image = "";
        let imagePublicId = "";
        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer, "mobiles");
            image = result.secure_url;
            imagePublicId = result.public_id;
        }
        const mobile = await Mobile.create({name,price,color,companyName,ram,camera,image,imagePublicId});
        res.status(201).json({
            success: true,
            message: "Mobile created successfully",
            data: mobile,
        })

    } catch (error) {
        console.log("Failed to create mobiel ", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to create mobile",
            error: error.message,
            cloudinaryError: error?.error?.message || null,
        })

    }
}


export const getMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        if (!mobiles) {
            return res.status(404).json({
                success: false,
                message: "Mobile not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Mobile get successfully",
            data: mobiles,
            count: mobiles.length
        })

    } catch (error) {
        console.log("Failed to get Mobiles ", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to get mobiles",
            error: error.message
        })


    }
}

export const updateMobile = async (req, res) => {
    try {
        const mobile = await Mobile.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                onValidators: true
            }

        )
        if (!mobile) {
            return res.status(404).json({
                success: false,
                message: "Mobile not Found"
            })
        }
        console.log("Mobile updated successfully")
        res.status(200).json({
            success: true,
            message: "Updated mobile successfully",
            data: mobile,
        })

    } catch (error) {
        console.log("Failed to update mobile", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to update mobile",
            error: error.message
        })

    }
}

export const deleteMobile = async (req, res) => {
    try {
        const mobile = await Mobile.findByIdAndDelete(req.params.id);
        if (!mobile) {
            return res.status(404).json({
                success: false,
                message: "Mobile not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Mobile Deleted successfully",
            data: mobile
        })

    } catch (error) {
        console.log("Failed to delete Mobile ");
        res.status(400).json({
            success: false,
            message: "Failed to delete Mobile",
            error: error.message
        })

    }
}


// middleware is a function which run between request and response
// In Node.js, middleware is a function that executes during the request-response
//  cycle of a web application, acting as an intermediary layer between
// the incoming client request and the final server response.
// It is a foundational design pattern heavily popularized by