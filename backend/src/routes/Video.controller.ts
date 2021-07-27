//Video Handler
import { RequestHandler } from "express";
import Video from "./Video";

export const createVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound) {
    return res.status(301).json({ message: "Video already exists" });
  } else {
    const vid = new Video(req.body);
    await vid.save();
    console.log(vid);
    res.json(" video saved");
  }
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const vid = await Video.find();
    res.json(vid);
  } catch (err) {
    res.json(err);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  if (!videoFound) {
    return res.status(204).json({ message: "video not found" });
  }
  res.json(videoFound);
};
export const updateVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!videoFound) {
    return res.status(204).json({ message: "video not found" });
  }
  res.json(videoFound);
};

export const deleteVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);
  if (!videoFound) {
    return res.status(204).json({ message: "video not found" });
  }
  res.json(videoFound);
};
