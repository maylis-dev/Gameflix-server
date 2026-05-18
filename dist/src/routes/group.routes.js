"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("../prisma/client");
const router = (0, express_1.Router)();
/// affiche les groups
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const groups = yield client_1.prisma.group.findMany({
            include: {
                members: true,
                messages: true,
                description: true,
                admin: true,
            },
        });
        res.json(groups);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to find groups" });
    }
}));
///creer groupe
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, photoGroup, adminId, isPrivate } = req.body;
        const newGroup = yield client_1.prisma.group.create({
            data: {
                name,
                description,
                photoGroup,
                adminId,
                isPrivate,
            },
        });
        res.json(newGroup);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create group" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const groupId = yield client_1.prisma.group.findUnique({
            where: { id },
            include: {
                members: true,
                messages: true,
                description: true,
                admin: true,
            },
        });
        res.json(groupId);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to find group by id" });
    }
}));
//edit group
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, description, photoGroup, adminId, isPrivate } = req.body;
        const updatedGroup = yield client_1.prisma.group.update({
            where: { id },
            data: {
                name,
                description,
                photoGroup,
                adminId,
                isPrivate,
            },
        });
        res.json(updatedGroup);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update group" });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield client_1.prisma.group.delete({
            where: { id },
            include: {
                members: true,
                messages: true,
                description: true,
                admin: true,
            },
        });
        res.json({ message: "Group deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete group" });
    }
}));
//modifier group
exports.default = router;
