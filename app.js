const h = React.createElement;

const myName = "Kyan Asher B. Arevalo";
const email = "kyanasher27@gmail.com";
const github = "https://github.com/Ashnoharu";
const number = "092770433";

const skills = ["C#", "JavaScript", "HTML5", "CSS3", "React", "Git & GitHub", "Visual Studio / VS Code", "PC Troubleshooting"];
const interests = ["Web development", "Cyber security", "Computer hardware", "Learning new tech"];

const navLinks = [
    ["Home", "#home"],
    ["Education", "#education"],
    ["About Me", "#about"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
];

function Header() {
    return h("header", { className: "header" },
        h("h1", null, "IT Portfolio Personal Website"),
        h("nav", { className: "nav" },
            navLinks.map((link) => h("a", { key: link[0], href: link[1] }, link[0]))
        )
    );
}

function ProfileCard() {
    return h("div", { className: "profile-card", id: "home" },
        h("div", { className: "profile-info" },
            h("h2", null, myName),
            h("p", { className: "tagline" },
                h("span", { className: "highlight" }, "Web Developer"),
                " ",
                h("span", { className: "highlight" }, "& Student")
            ),
            h("p", { className: "bio" },
                "Welcome to my website! I am a soon to be Cyber security professional. " +
                "As of now I am continuing to pursue my dream as a freshman college student " +
                "taking a Bachelor of Science in Information Technology."
            ),
            h("a", { href: "#contact", className: "contact-btn" }, "Contact")
        )
    );
}

function Education() {
    return h("article", { className: "description", id: "education" },
        h("h3", null, "Educational Background"),
        h("div", { className: "entry" },
            h("h4", null, "Bachelor of Science in Information Technology"),
            h("p", null, "Your University Name | 2026 - Present")
        ),
        h("div", { className: "entry" },
            h("h4", null, "Senior High School"),
            h("p", null, "Your School Name | Years Attended")
        )
    );
}

function About() {
    return h("article", { className: "description", id: "about" },
        h("h3", null, "About Me"),
        h("p", null, "I'm an IT student who likes learning by doing. I enjoy coding and I'm just as happy repairing a PC."),
        h("h4", null, "Interests"),
        h("ul", null, interests.map((item) => h("li", { key: item }, item))),
        h("h4", null, "Hobbies"),
        h("p", null, "Building PCs, coding side projects, exploring new tools.")
    );
}

function Skills() {
    return h("article", { className: "description", id: "skills" },
        h("h3", null, "Skills"),
        h("div", { className: "skill-list" },
            skills.map((skill) => h("span", { key: skill }, skill))
        )
    );
}

function Sidebar() {
    return h("aside", { className: "sidebar" },
        h("img", {
            src: "me.jpeg",
            alt: "Profile Picture",
            className: "avatar",
            onError: function (e) { e.target.style.display = "none"; }
        }),

        h("h3", null, "Quick Links"),
        h("ul", null,
            navLinks.map((link) =>
                h("li", { key: link[0] }, h("a", { href: link[1] }, link[0]))
            )
        ),

        h("h3", { className: "socials-title" }, "My Socials"),
        h("ul", null,
            h("li", null, h("a", { href: github, target: "_blank" }, "GitHub")),
            h("li", null, h("a", { href: "mailto:" + email }, "Email"))
        )
    );
}

function Feedback() {
    const [sent, setSent] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSent(true);
        e.target.reset();
    }

    return h("aside", { className: "feedback" },
        h("h3", null, "Feedback"),
        h("p", null, "Leave a comment about my website."),
        h("form", { onSubmit: handleSubmit },
            h("input", { type: "text", placeholder: "Your name", required: true }),
            h("textarea", { placeholder: "Your feedback", rows: 4, required: true }),
            h("button", { type: "submit", className: "contact-btn" }, "Send")
        ),
        sent ? h("p", { className: "thanks" }, "Thank you for your feedback!") : null
    );
}

function Footer() {
    return h("footer", { className: "footer", id: "contact" },
        h("h3", null, "Contact Me"),
        h("p", null, myName),
        h("p", null, h("a", { href: "mailto:" + email }, email)),
        h("p", null, h("a", { href: "tel:" + number }, number)),
        h("p", null, h("a", { href: github, target: "_blank" }, "GitHub")),
        h("p", null, "\u00A9 2026 \u2014 " + myName)
    );
}

function App() {
    return h("div", { className: "container" },
        h(Header),
        h("main", { className: "main-area" },
            h("section", { className: "content" },
                h(ProfileCard),
                h(Education),
                h(About),
                h(Skills)
            ),
            h("div", { className: "right-column" },
                h(Sidebar),
                h(Feedback)
            )
        ),
        h(Footer)
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));