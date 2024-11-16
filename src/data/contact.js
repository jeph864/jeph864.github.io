import { Mail,  Github, Linkedin, MapPin, Phone } from 'lucide-react';

export const contactInfo = [
    {
        icon: Mail,
        label: "john.doe@example.com",
        href: "mailto:john.doe@example.com"
    },
    {
        icon: Phone,
        label: "+1 (555) 123-4567",
        href: "tel:+15551234567"
    },
    {
        icon: MapPin,
        label: "San Francisco, CA",
        href: null
    }
];

export const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/yourusername",
        label: "GitHub"
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn"
    }
];

export const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    profileImage: "/api/placeholder/128/128"
};