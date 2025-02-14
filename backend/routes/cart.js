const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ✅ Add item to cart
router.post("/add", async (req, res) => {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.productId === productId);

    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.json({ success: true, cart });
});

// ✅ Get cart for user
router.get("/:userId", async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart || { userId: req.params.userId, items: [] });
});

// ✅ Sync local storage cart with database
router.post("/sync", async (req, res) => {
    const { userId, items } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items });
    } else {
        items.forEach((localItem) => {
            const existingItem = cart.items.find((dbItem) => dbItem.productId === localItem.productId);
            if (existingItem) {
                existingItem.quantity += localItem.quantity;
            } else {
                cart.items.push(localItem);
            }
        });
    }

    await cart.save();
    res.json({ success: true, cart });
});

// ✅ Export router correctly
module.exports = router;
