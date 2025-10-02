// import PropTypes from "prop-types";
// import { useState } from "react";
// import CountUp from 'react-countup';
// import VisibilitySensor from "react-visibility-sensor";

// const CounterUpItem = ({ data }) => {
//     const [didViewCountUp, setDidViewCountUp] = useState(false);

//     const onVisibilityChange = isVisible => {
//         if (isVisible) {
//             setDidViewCountUp(true);
//         }
//     };
//     return (
//         <div className="funfact">
//             <div className="number">
//                 <VisibilitySensor
//                     onChange={onVisibilityChange}
//                     offset={{ top: 10 }}
//                     delayedCall
//                 >
//                     <CountUp end={didViewCountUp ? data.number : 0} />
//                 </VisibilitySensor>
//             </div>
//             <h2 className="text">{data.text}</h2>
//         </div>
//     )
// }

// CounterUpItem.propTypes = {
//     data: PropTypes.object
// };

// export default CounterUpItem;





import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterUpItem = ({ data }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // only count once
    threshold: 0.1,    // element visible threshold
  });

  useEffect(() => {
    if (inView) setDidViewCountUp(true);
  }, [inView]);

  return (
    <div className="funfact" ref={ref}>
      <div className="number">
        <CountUp end={didViewCountUp ? data.number : 0} />
      </div>
      <h2 className="text">{data.text}</h2>
    </div>
  );
};

CounterUpItem.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default CounterUpItem;
