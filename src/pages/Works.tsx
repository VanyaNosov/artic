import { useEffect } from 'react'

import ProjectCard from '@/shared/ui/ProjectCard'
import { projectDetails } from '@/shared/constants/projectDetails'
import Hero from '@/sections/Hero'

const Works = () => {

    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])

    return (
        <main className="container pb-32">
            <Hero
                title={'works.title'}
                text={'works.text'}
                subtext={'works.subtext'}
                textRotator={false}
                button={false}
                fullScreen={false}
            />
            <div className="flex gap-9 justify-between flex-wrap">
                {projectDetails.map((obj, id) => (
                    <ProjectCard
                        key={id}
                        name={obj.name}
                        img={obj.mainImage}
                        formatProject={obj.formatProject}
                        id={obj.id}
                    />
                ))}
            </div>
        </main>
    )
}
export default Works
