import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Flex } from "@ui/Flex";
import "./style.scss";

interface ICollapseBoxProps {
  title: string;
  description: string;
}

export const CollapseBox: React.FC<ICollapseBoxProps> = ({
  title,
  description,
}) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box className="collapse" maw={400} mx="auto">
      <Flex
        className="collapse-box"
        justifyContent="space-between"
        alignItems="align-center"
        onClick={toggle}
      >
        <h3>{title}</h3>
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </Flex>
      <Collapse className="collapse-content" in={opened}>
        <p>{description}</p>
      </Collapse>
    </Box>
  );
};
