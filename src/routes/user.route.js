import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send('get method called ');
}

);

router.get(
    "/all/:id", (req, res) => {
        res.status(200).send('get all method called ');
    }
);

router.put(
    "/:id", (req, res) => {
        res.status(200).send('put method called ');
    }
);
router.post(
    "/:id", (req, res) => {
        res.status(200).send('post method called ');
    }
);

router.delete(
    "/:id", (req, res) => {
        res.status(200).send('delete method called ');
    }
);

export default router;
