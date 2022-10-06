import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from './Card';
import { Pill } from './Pill';
import { Calendar, Clock, Edit, hp, MarkAsDone, sharedStyles } from '@themes';
import { formatDate, formatTime } from '@utils/dateTime';

interface IProps {
  backgroundColor: string;
  borderColor: string;
  title: string;
  taskId: string;
  dateTime: Date;
  onDeleteTask: (taskId: string) => void;
  labels?: string[];
}

export const TaskCard: React.FC<IProps> = ({
  backgroundColor,
  borderColor,
  title,
  dateTime,
  onDeleteTask,
  taskId,
  labels
}) => {
  return (
    <Card backgroundColor={backgroundColor} style={styles.card}>
      <View style={styles.taskCardHeader}>
        <View style={styles.pillsContainer}>
          {labels &&
            labels.map(label => (
              <Pill text={label} borderColor={borderColor} key={label} />
            ))}
        </View>
        <Edit />
      </View>
      <View style={styles.taskCardFooter}>
        <View>
          <Text style={sharedStyles.h1}>{title}</Text>
          <View style={styles.dateTimesContainer}>
            <View style={styles.dateTimeContainer}>
              <Calendar />
              <Text style={styles.dateTime}>{formatDate(dateTime)}</Text>
            </View>
            <View style={styles.dateTimeContainer}>
              <Clock />
              <Text style={styles.dateTime}>{formatTime(dateTime)}</Text>
            </View>
          </View>
        </View>
        <Pressable onPress={() => onDeleteTask(taskId)}>
          <MarkAsDone />
        </Pressable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10
  },
  pillsContainer: {
    flexDirection: 'row'
  },
  dateTimesContainer: {
    marginTop: hp(18)
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateTime: {
    marginLeft: 10
  },
  taskCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
    justifyContent: 'space-between'
  },
  taskCardFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});
