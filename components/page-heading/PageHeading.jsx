function PageHeading({title, tagline, ...props}) {
    return ( 

        <div className="bg-gradient-to-br from-indigo-500 to-blue-400 via-sky-500  w-full h-screen flex justify-center items-center">
            <header className="text-center">
                <h1 className=" text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-200 pb-3">{title}</h1>
                <p className="text-sm md:text-lg lg:text-2xl text-gray-800/50">{tagline}</p>
            </header>
        </div>
     );
}

export default PageHeading;