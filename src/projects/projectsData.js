import projectOne from "../assets/project1.png";
import projectTwo from "../assets/project2.png";
import projectThree from "../assets/project3.png";

const projects = {
    1: {
        title: "My-Portfolio",
        image: projectOne,
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </>
        ),
        github: "https://github.com/the17sun/karshibaev17",
        demo: "https://the17sun.vercel.app",
    },
    2: {
        title: "Air 17",
        image: projectTwo,
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </>
        ),
        github: "https://github.com/the17sun/avia-ticket",
        demo: "https://air17.netlify.app/",
    },
    3: {
        title: "Luxury Restaurant GRILLI",
        image: projectThree,
        description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </>
        ),
        github: "https://github.com/the17sun/grilli-lounge",
        demo: "https://loungegrilli.netlify.app/",
    },
};

export default projects;
