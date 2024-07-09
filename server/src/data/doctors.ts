import { InMemoryStore } from "./InMemoryStore";

export interface Doctor {
    id: string;
    title: string;
    description: string;
    location: string;
    image?: string;
}

export const doctors: Doctor[] = [
    {
        id: '484ceeb3-7abe-4e73-8ff2-b9ab1923a6d5',
        title: 'Dr. John Doe',
        description: 'Emergency Medicine Specialist',
        location: 'Central Hospital',
        image: 'https://example.com/doctor1.jpg'
    },
    {
        id: 'a0274e6a-5e82-4b51-8068-552e2f8da5fa',
        title: 'Dr. Jane Smith',
        description: 'Cardiologist',
        location: 'Heart Care Clinic',
        image: 'https://example.com/doctor2.jpg'
    },
    {
        id: '14908864-a80f-4b48-a368-d30fa164be19',
        title: 'Dr. Alan Brown',
        description: 'Neurologist',
        location: 'Neuro Health Center',
        image: 'https://example.com/doctor3.jpg'
    },
    {
        id: '1466e64c-cf0f-4d93-bc25-afc5f99b52d7',
        title: 'Dr. Emily Davis',
        description: 'Pediatrician',
        location: 'Children’s Hospital',
        image: 'https://example.com/doctor4.jpg'
    },
    {
        id: 'e2927ce0-4713-487b-b64c-e675acef927c',
        title: 'Dr. Michael Wilson',
        description: 'Orthopedic Surgeon',
        location: 'Ortho Specialty Clinic',
        image: 'https://example.com/doctor5.jpg'
    },
    {
        id: 'c64e89c5-c724-4696-9dc8-8aec2dae8d59',
        title: 'Dr. Olivia Martin',
        description: 'Dermatologist',
        location: 'Skin Care Center',
        image: 'https://example.com/doctor6.jpg'
    },
    {
        id: 'f92ab25b-79f7-42be-929f-fa59f94b6fb8',
        title: 'Dr. James Taylor',
        description: 'Oncologist',
        location: 'Cancer Treatment Facility',
        image: 'https://example.com/doctor7.jpg'
    },
    {
        id: 'fb9d488a-b0ce-4d45-ae91-c90397e51756',
        title: 'Dr. Sophia Anderson',
        description: 'Endocrinologist',
        location: 'Endocrine Health Institute',
        image: 'https://example.com/doctor8.jpg'
    },
    {
        id: 'c658781e-a216-4289-899d-b2adb789b304',
        title: 'Dr. Daniel Thomas',
        description: 'Gastroenterologist',
        location: 'Digestive Health Center',
        image: 'https://example.com/doctor9.jpg'
    },
    {
        id: 'c012315e-28f3-4ff9-b753-1151ed92a3e7',
        title: 'Dr. Grace Lee',
        description: 'Pulmonologist',
        location: 'Lung Health Clinic',
        image: 'https://example.com/doctor10.jpg'
    },
    {
        id: '60040330-0968-4fe1-94dc-da4cba437692',
        title: 'Dr. Benjamin Harris',
        description: 'Rheumatologist',
        location: 'Arthritis Care Center',
        image: 'https://example.com/doctor11.jpg'
    },
    {
        id: '13440fe2-76ee-4fe2-ad30-b81b18c9589d',
        title: 'Dr. Abigail Clark',
        description: 'Allergist',
        location: 'Allergy and Asthma Center',
        image: 'https://example.com/doctor12.jpg'
    },
    {
        id: '0d041095-1f1b-4b0f-a970-8821a10338eb',
        title: 'Dr. Henry Lewis',
        description: 'Nephrologist',
        location: 'Kidney Care Clinic',
        image: 'https://example.com/doctor13.jpg'
    },
    {
        id: '7644869b-f4f4-475c-b31b-abb706d1c038',
        title: 'Dr. Charlotte Robinson',
        description: 'Hematologist',
        location: 'Blood Health Center',
        image: 'https://example.com/doctor14.jpg'
    },
    {
        id: '7c21a69f-8206-4a45-9c75-fc660118dec4',
        title: 'Dr. Jack Walker',
        description: 'Urologist',
        location: 'Urology Care Center',
        image: 'https://example.com/doctor15.jpg'
    },
    {
        id: 'cccf6709-7476-4f74-8268-cd7f8ee8986c',
        title: 'Dr. Amelia Hall',
        description: 'Ophthalmologist',
        location: 'Eye Health Institute',
        image: 'https://example.com/doctor16.jpg'
    },
    {
        id: '78c5c159-0d7e-4cf4-a7c9-217ec5cca1d0',
        title: 'Dr. William Young',
        description: 'Psychiatrist',
        location: 'Mental Health Center',
        image: 'https://example.com/doctor17.jpg'
    },
    {
        id: '00e2470c-af8e-479f-95f9-41873a60d014',
        title: 'Dr. Mia King',
        description: 'Gynecologist',
        location: 'Women’s Health Clinic',
        image: 'https://example.com/doctor18.jpg'
    },
    {
        id: 'a02f8869-55d5-45bb-b661-0612572117ae',
        title: 'Dr. Alexander Scott',
        description: 'Otolaryngologist',
        location: 'ENT Health Center',
        image: 'https://example.com/doctor19.jpg'
    },
    {
        id: '61f45369-f02d-408b-8e50-31d61e3183fa',
        title: 'Dr. Chloe Green',
        description: 'Plastic Surgeon',
        location: 'Cosmetic Surgery Clinic',
        image: 'https://example.com/doctor20.jpg'
    },
    {
        id: '42fd5e52-d18d-484f-a359-f96e910c4567',
        title: 'Dr. Lucas Baker',
        description: 'Podiatrist',
        location: 'Foot and Ankle Clinic',
        image: 'https://example.com/doctor21.jpg'
    },
    {
        id: '643edb5e-a656-44a7-a1bd-ef1db966eedf',
        title: 'Dr. Natalie Adams',
        description: 'Radiologist',
        location: 'Imaging Center',
        image: 'https://example.com/doctor22.jpg'
    },
    {
        id: 'e6732f94-e656-4fa0-8659-d891f79c4282',
        title: 'Dr. Andrew Rodriguez',
        description: 'Pathologist',
        location: 'Diagnostic Lab',
        image: 'https://example.com/doctor23.jpg'
    },
    {
        id: '1ed78a3e-6ee6-4dee-af6d-c7079fb16846',
        title: 'Dr. Ella White',
        description: 'Geriatrician',
        location: 'Senior Health Center',
        image: 'https://example.com/doctor24.jpg'
    },
    {
        id: '15b85f97-0486-4baa-94d9-702dab08b960',
        title: 'Dr. Samuel Harris',
        description: 'Infectious Disease Specialist',
        location: 'Infectious Disease Clinic',
        image: 'https://example.com/doctor25.jpg'
    },
    {
        id: 'f1b4bfa0-d342-4bab-918c-dee73911e822',
        title: 'Dr. Victoria Lee',
        description: 'Anesthesiologist',
        location: 'Surgical Center',
        image: 'https://example.com/doctor26.jpg'
    },
    {
        id: 'd7e8ebe7-066b-4097-a0ef-58b7900a417b',
        title: 'Dr. Anthony Thompson',
        description: 'General Practitioner',
        location: 'Community Health Clinic',
        image: 'https://example.com/doctor27.jpg'
    },
    {
        id: 'f5bc6334-37a6-49cf-aeef-b985079215d7',
        title: 'Dr. Harper Martinez',
        description: 'Chiropractor',
        location: 'Spine Health Center',
        image: 'https://example.com/doctor28.jpg'
    },
    {
        id: '9ed2496b-9f3c-48cd-a296-dc1d4982ec7e',
        title: 'Dr. Christopher Garcia',
        description: 'Pulmonologist',
        location: 'Respiratory Care Center',
        image: 'https://example.com/doctor29.jpg'
    },
    {
        id: '2edbd5ce-54d8-41cb-b919-e9f1c7a8a1ed',
        title: 'Dr. Hannah Perez',
        description: 'Family Medicine',
        location: 'Family Health Clinic',
        image: 'https://example.com/doctor30.jpg'
    }
];

class DoctorStore extends InMemoryStore<Doctor> {
    constructor(doctor: Doctor[]) {
        super(doctor);
    }
}

export const doctorStore = new DoctorStore(doctors);