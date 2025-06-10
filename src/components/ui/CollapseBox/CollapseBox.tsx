import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Flex } from "@ui/Flex";
import './style.scss'

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
        <Flex className="collapse-box" justifyContent="space-between" onClick={toggle}>
          <Text>{title}</Text>
          <FontAwesomeIcon icon={faAngleDown} />
        </Flex>
      <Collapse in={opened}>
        <Text>{description}</Text>
      </Collapse>
    </Box>
  );
};
