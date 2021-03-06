import React from "react";

export interface LessonHeaderProps {
  // Badges for the lesson (e.g. 'Beginner', 'Rust', etc.)
  badges?: Array<string>;
  // Name of the module that this lesson belongs to.
  module: string;
  // Title of the lesson.
  title: string;
}

const LessonHeader: React.FunctionComponent<LessonHeaderProps> = (
  props: LessonHeaderProps
) => {
  return (
    <div id="module_header" className="row no-gutters">
      <div className="col-10 offset-1">
        <h2>
          <a className="back-link" href="/">
            &lt;
          </a>
          &nbsp;{props.module}
          {props.badges?.map((badge) => (
            <span key={badge} className="module_badge beginner_badge">
              {badge}
            </span>
          ))}
        </h2>
        <h1 id="lesson-header">{props.title}</h1>
      </div>
    </div>
  );
};

export default LessonHeader;
