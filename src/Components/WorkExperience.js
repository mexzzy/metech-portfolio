import { Zoom, Slide } from "react-awesome-reveal";

const WorkExperience = ({ 
  title, 
  date, 
  description, 
  bulletPoints = [],
  triggerOnce = true 
}) => {
  return (
    <div className="resumeWriteUp">
      <Zoom triggerOnce={triggerOnce}>
        <div>
          <div className="workTitle">{title}</div>
          <div className="workDate">{date}</div>
        </div>
      </Zoom>
      <Slide triggerOnce={triggerOnce}>
        <div>
          <div className="words">
            {description}
            {bulletPoints.length > 0 && (
              <ul>
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default WorkExperience;