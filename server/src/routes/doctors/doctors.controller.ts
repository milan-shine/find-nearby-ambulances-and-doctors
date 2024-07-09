import { RequestHandler } from "express";
import { doctorStore } from "../../data/doctors";
import { randomUUID } from "crypto";

export const getDoctors: RequestHandler = async (req, res) => {
    const page = req.query.page ?? 1;
    const limit = 10;

    const doctorsResponse = doctorStore.getPaginated(Number(page), limit)

    res.json(doctorsResponse);
};

export const createDoctor: RequestHandler = async (req, res) => {
    const doctorData = req.body;

    const newDoctor = doctorStore.add({ ...doctorData, id: randomUUID() });

    res.status(201).json(newDoctor);
}

export const updateDoctor: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const updatedDoctor = req.body;
    const doctor = doctorStore.update(id, updatedDoctor);

    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }

}

export const deleteDoctor: RequestHandler = async (req, res) => {
    const { id } = req.params;

    doctorStore.delete(id);

    res.status(200).json({ message: 'Doctor deleted successfully' });
}