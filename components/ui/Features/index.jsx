import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink";

const Features = () => {

    const features = [
        {
            icon: "🎨",
            title: "Figma",
            desc: "Get Fully Customizable Figma Designs"
        },
        {
            icon: "🌟",
            title: "Landing Pages",
            desc: "Get better at designing landing pages that convert"
        },
        {
            icon: "🌐",
            title: "Web Apps",
            desc: "Design intuitive web apps with good design & UX"
        },
        {
            icon: "🚀",
            title: "Web UI Elements",
            desc: "Building a web app? but having trouble coming up with flows?"
        },
       {
            icon: "🐧",
            title: "Design Systems",
            desc: "Create your own design system with pre-built templates"
        },
        {
            icon: "😻",
            title: "Product Hunt",
            desc: "Launch your app on PH with pre-designed templates"
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600 mt-20">
            <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl justify-center flex mb-20">
              Figma Design Kit                            
            </h2>            
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 text-4xl text-indigo-600 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features