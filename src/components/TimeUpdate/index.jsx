import React from "react";
import { TimeUpdateContainer, TimeUpdateText } from "./styled";
import updateCircles from "../../assets/icons/updateCircles.svg";
import { formatTime } from "../../utils/timeUtilities";

function TimeUpdate() {
	return (
		<TimeUpdateContainer>
			<img src={updateCircles} alt="update circles" />
			<TimeUpdateText>Last updated at {formatTime(Date.now())}</TimeUpdateText>
		</TimeUpdateContainer>
	);
}

export default TimeUpdate;
