import { Request, Response, NextFunction } from "express";
import { findPostService } from '../services/PostService';
import {
    getPostService,
    createPostService,
    updatePostService,
    deletePostService,
} from "../services/PostService";

export const getPosts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    getPostService(req, res, next);
};
export const createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    createPostService(req, res, next);
};

export const updatePost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    updatePostService(req, res, next);
};

export const deletedPost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    deletePostService(req, res, next);
};

export const findPost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    findPostService(req, res, next)
}
