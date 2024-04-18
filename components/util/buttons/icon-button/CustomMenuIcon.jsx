import { IconButton } from "@chakra-ui/react";
import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";



const CustomMenuIcon = ({ version, ...props }) => {
	return (
		<IconButton
			icon={<CgMenuRightAlt size='2rem' color='textColor.light' />}
			bg='transparent'
			color={version === "white" ? "textColor.dark" : "textColor.light"}
			_hover={{ transform: "scale(1.2)" }}
			{...props}
		/>
	);
};

export default CustomMenuIcon;
