import dayjs from 'dayjs';

// Icons
import FlareTwoToneIcon from '@mui/icons-material/FlareTwoTone';
import AssistantTwoToneIcon from '@mui/icons-material/AssistantTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';

export const getBadge = (joinDate, size) => {
  const userJoinDate = dayjs(joinDate);
  const currentDate = dayjs();
  const yearsSinceJoin = currentDate.diff(userJoinDate, 'year');

  switch (true) {
    case yearsSinceJoin >= 5:
      return (
        <WorkspacePremiumTwoToneIcon fontSize={size} sx={{ color: '#162ba6' }} />
      );
    case yearsSinceJoin >= 3:
      return <AssistantTwoToneIcon fontSize={size} color="secondary" />;
    case yearsSinceJoin >= 1:
      return <FlareTwoToneIcon fontSize={size} color="error" />;
    default:
      return null;
  }
};

export const getBadgeTitle = (joinDate) => {
  const userJoinDate = dayjs(joinDate);
  const currentDate = dayjs();
  const yearsSinceJoin = currentDate.diff(userJoinDate, 'year');

  switch (true) {
    case yearsSinceJoin >= 5:
      return 'Member from 5+ Years';
    case yearsSinceJoin >= 3:
      return 'Member from 3+ Years';
    case yearsSinceJoin >= 1:
      return 'Member from 1+ Years';
    default:
      return null;
  }
};
