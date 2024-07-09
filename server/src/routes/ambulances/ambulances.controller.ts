import { RequestHandler } from "express";
import { ambulanceStore } from "../../data/ambulances";
import { randomUUID } from "crypto";

export const getAmbulances: RequestHandler = async (req, res) => {
    const page = req.query.page ?? 1;
    const limit = 10;

    setTimeout(() => {
        const ambulanceResponse = ambulanceStore.getPaginated(+page, limit)
        res.json(ambulanceResponse);
    }, 500)
};

export const createAmbulance: RequestHandler = async (req, res) => {
    const ambulanceData = req.body;

    const newAmbulance = ambulanceStore.add({ ...ambulanceData, id: randomUUID() });

    res.status(201).json(newAmbulance);
}

export const updateAmbulance: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const updatedAmbulance = req.body;
    const ambulance = ambulanceStore.update(id, updatedAmbulance);

    if (ambulance) {
        res.json(ambulance);
    } else {
        res.status(404).json({ message: 'Ambulance not found' });
    }
}

export const deleteAmbulance: RequestHandler = async (req, res) => {
    const { id } = req.params;

    ambulanceStore.delete(id);

    res.status(200).json({ message: 'Ambulance deleted successfully' });
}