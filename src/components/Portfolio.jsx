import Project from "./Project";

const Portfolio = () => {
  return (
    <div id="portfolio" className="mt-20">
      <h2 className="text-center text-5xl font-black">My Portfolio</h2>
      <div className="flex flex-col gap-8">
        <Project
          title="Project 1: Kahaani"
          subtitle="A diary writing app for storing moments."
          link="https://mykahaani.vercel.app"
          image="/kahaani-mockup.png"
          techs={[
            "Next.js (in TypeScript)",
            "NextAuth (for authentication using: discord, spotify and github providers)",
            "Grafbase (for building graphql apis and database)",
            "Cloudinary (for storing images)",
          ]}
        >
          <p className="text-sm">
            I built this app as a project for an online 15 day hackathon
            organised by hashnode and grafbase. In this project, a user can do
            diary entry and write his/her daily stories. The user can also store
            key moments of the day through images and can also tag their day as
            good, bad or neutral through which the user can reflect upon certain
            stories in future. Under this project, I learnt about graphql and
            how to build and deploy apis using grafbase. <br /> <br />
            The features in this projects involves: <br />
            1. Authentication <br />
            2. Database <br />
            3. Storage (image upload by users) <br />
          </p>
        </Project>
        <Project
          title="Project 2: Blogpad"
          subtitle="My own static site generator for my blog."
          link="https://github.com/Vikas-Maur/blogpad"
          image="/blogpad-mockup.png"
          reverse={true}
          techs={[
            "Python",
            "MySQL (for database of the blogs)",
            "Tkinter (for GUI)",
            "Beautiful Soup 4",
          ]}
        >
          <p className="text-sm">
            When I was starting with coding, I was very much into python and
            tkinter. I created my own blog named{" "}
            <span className="font-bold">myCODEnotein </span>
            in which I used to store my coding notes. It was in simple HTML, CSS
            & Js at that time and very often I the html files would get too long
            and unmaintainable. To resolve that, I made this desktop app using
            python and tkinter, so that I can write my blogs in basic Notepad
            kind of editor and the editor does all the HTML forming stuff behind
            the backend automatically. <br /> <br />
            Some features of the blogpad were: <br />
            1. CRUD operation for blogs. <br />
            2. Syntax Highiligter. <br />
            3. My own built in live sever, terminal and mini code runner. <br />
          </p>
        </Project>
        <Project
          title="Project 3: myCODEnotein"
          subtitle="My technical blog for storing coding notes."
          link="https://mycodenotein.netlify.app/"
          image="/mycodenotein-logo.png"
          techs={[
            "Bootstrap",
            "Prisma Js (for syntax highlighting of code)",
            "HTML",
            "CSS",
            "Javascript",
          ]}
        >
          <p className="text-sm">
            I started this blog as I used to forget a lot of things about
            tkinter. And on google, I never found a solid resource going in
            depth in tkinter. So, I thought of creating a website, where I can
            store all my knowledge, in the form of notes, which gave birth to
            this project.
            <br />
            It's a basic HTML, CSS & Js website using bootstrap and prisma.js .{" "}
            <br />A highlight of what this website taught me, what and how of
            <span className="font-bold">
              {" "}
              Progressive Web Applications (PWAs){" "}
            </span>
            .
          </p>
        </Project>
      </div>
    </div>
  );
};

export default Portfolio;
