import img1 from "./images/land images/img1.jpg";
import img2 from "./images/land images/img2.jpg";
import img3 from "./images/land images/img3.jpg";
import img4 from "./images/land images/img4.jpg";
import img5 from "./images/land images/img4.jpg";
import img6 from "./images/land images/img6.jpg";
import img7 from "./images/land images/img7.jpg";
import img8 from "./images/land images/img8.jpg";
import img9 from "./images/land images/img9.jpg";

export default [
    {
        id: 1,
        title: '3 Bedroom house',
        slug: '3-bedroom-house',
        location: 'Wakiso',
        description: ` Nice home located in the hearts
        of Wakiso kitebi. It is fully furnished and ready
        for sale. Its best for residential. It has a 
        garage, a kitchen, balcon, living room, bathroom
        and store with four bedrooms`,
        rooms: 12,
        images: [img1, img2, img3],
        price: 20000,
        size: 500,
        landsize: 3,
        distance: 3,
        view: 'lakeview',
        hospital: 4,
        school: 6
    },
    {
        id: 2,
        title: 'Fully furnished 2 bedroom house',
        slug: 'furnished 2 bedroom house',
        location: 'Kampala',
        description: ` In the hearts of kampala, this
        house is ready for grabs and no one will take
        it apart from you. This is your chance to get
        it from now. Just send us an email or
        contact us in the contact form we shall connect
        to you`,
        rooms: 8,
        images: [img4, img5, img6],
        price: 30000,
        size: 500,
        landsize: 2,
        distance: 0.4,
        view: 'Rich neighborhood',
        hospital: 2,
        school: 1
    },
    {
        id: 3,
        title: '1 Bedroom house on sale',
        slug: 'one bedroom house on sale',
        location: 'Mukono',
        description: ` Just shift your
        properties and start
        your private life
        . It is fully furnished and ready
        for sale. Its best for residential. It has a 
        garage, a kitchen, balcon, living room, bathroom
        and store with four bedrooms`,
        rooms: 4,
        images: [img7, img8, img9],
        price: 9000,
        size: 120,
        landsize: 0.4,
        distance: 1.6,
        view: 'Town view',
        hospital: 0.8,
        school: 2
    }
]