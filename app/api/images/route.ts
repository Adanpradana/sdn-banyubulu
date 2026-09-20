import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type CloudinaryImage = {
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
  format?: string;
};

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 100,
    });

    const images = (result.resources as CloudinaryImage[])
      .filter((image) => image.public_id !== "main-sample")
      .map((image) => ({
        publicId: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
        format: image.format,
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch images",
      },
      {
        status: 500,
      },
    );
  }
}
