import TimelineEvent from "../components/Experience";
import {experiences} from "../data/experiences.js";

const Experiences = ({isDark}) =>{


    return (
        <>
            <div className="max-w-6xl mx-auto px-8 pb-16">
                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Experience
                </h2>
                {/* Continuous timeline line */}
                <div className="relative max-w-3xl mx-auto">
                    <div className={`absolute left-16 top-0 bottom-0 w-px ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}/>

                    {/* Events */}
                    <div className="relative">
                        {experiences.map((event, index) => (
                            <TimelineEvent
                                key={index}
                                event={event}
                                isDark={isDark}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experiences;