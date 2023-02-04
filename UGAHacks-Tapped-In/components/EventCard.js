import { Card, Button, Text } from "@rneui/themed";

const EventCard = () => {
  return (
    <Card>
      <Text>Word of the Day</Text>
      <Text h4>be-nev-o=lent</Text>
      <Text>adjective</Text>
      <Text>
        well meaning and kindly.
        {'"a benevolent smile"'}
      </Text>
      <Button size="sm" type="clear">
        Learn More
      </Button>
    </Card>
  );
};

export default EventCard;
