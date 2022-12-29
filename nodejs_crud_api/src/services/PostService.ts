import { NextFunction, Request, Response } from "express";
import Post from "../models/Post";
import { errorHandler } from "../utils/Error";

//get posts
export const getPostService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const title = req.query.title;
        let posts;
        if (title) {
            posts = await Post.find({ title });
        } else {
            posts = await Post.find();
        }
        res.status(200).json({
            success: true,
            data: posts,
        });
    } catch (error: any) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//create post
export const createPostService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json({
            success: true,
            data: savedPost,
        });
    } catch (error: any) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

// update post
export const updatePostService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            success: true,
            data: updatePost,
        });
    } catch (error: any) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//delete post
export const deletePostService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: `${deletePost?.title} Removed`,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//find post
export const findPostService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: post,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};
