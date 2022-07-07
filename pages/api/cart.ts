import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import {supabaseClient} from "../../lib/supabase";


const CartApi = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        // Get all cart items
        case "GET":
            const { data: getData, error: getError } = await supabaseClient
                .from("cart")
                .select("*");

            if (getError) {
                return res.status(500).json({ message: getError.message });
            }
            return res.status(200).json(getData);

        // Add to cart
        case "POST":
            const cart = req.body;
            const { data: postData, error: postError } = await supabaseClient.from("carts").insert(cart);
            if (postError) {
                return res.status(500).json({ message: postError.message });
            }
            return res.status(200).json(postData);

        // Edit cart
        case "PATCH":
            const { cartId: editcartId, payload } = req.body;
            const { data: patchData, error: patchError } = await supabaseClient
                .from("carts")
                .update({ payload })
                .eq("id", editcartId);
            if (patchError) {
                return res.status(500).json({ message: patchError.message });
            }
            return res.status(200).json(patchData);
        // Delete cart
        case "DELETE":
            const { cart_id: deletecartId } = req.query;
            if (typeof deletecartId === "string") {
                const { data: deleteData, error: deleteError } = await supabaseClient
                    .from("carts")
                    .delete()
                    .eq("id", deletecartId + "");
                if (deleteError) {
                    return res.status(500).json({ message: deleteError.message });
                }
                return res.status(200).json(deleteData);
            }
        default:
            return res.status(405).json({
                message: "Method Not Allowed",
            });
    }
};

export default CartApi;
