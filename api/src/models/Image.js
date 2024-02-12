const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        imageUrl: { type: String, required: true },
        description: { type: String, default: "" },
    },
    { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
