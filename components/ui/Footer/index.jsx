const socialInfo = [   
    {
        icon: <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>,
        href: "https://x.com/kathanmehtaa"
    },   
]

const Footer = () => (
    <footer>
        <div className="custom-screen pt-16">
            <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                <p className="text-gray-600">© 2024 Designfast. All rights reserved.</p>
                <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                    {
                        socialInfo.map((item, idx) => (
                            <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </footer>
)

export default Footer