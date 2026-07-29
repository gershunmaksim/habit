import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('eng');

type Props = {
  onChange?: (date: string) => void;
  events?: Record<string, number>;
};

export default function CalendarStrip({
  onChange,
  events = {},
}: Props) {
  const [selected, setSelected] = useState(
    dayjs().format('YYYY-MM-DD'),
  );

  const days = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) =>
        dayjs().add(i - 30, 'day'),
      ),
    [],
  );

  return (
    <FlatList
      horizontal
      data={days}
      keyExtractor={(item) => item.format('YYYY-MM-DD')}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => {
        const date = item.format('YYYY-MM-DD');
        const active = date === selected;
        const count = events[date] ?? 0;

        return (
          <Pressable
            onPress={() => {
              setSelected(date);
              onChange?.(date);
            }}
            style={[styles.card, active && styles.active]}>
            <Text
              style={[styles.day, active && styles.activeText]}>
              {item.format('DD')}
            </Text>

            <Text
              style={[styles.week, active && styles.activeText]}>
              {item.format('dd')}
            </Text>

            <View style={styles.dots}>
              {Array.from({ length: Math.min(count, 3) }).map(
                (_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      active && styles.activeDot,
                    ]}
                  />
                ),
              )}
            </View>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
    height: 90,
  },

  content: {
    paddingVertical: 0,
    alignItems: 'center',
  },

  card: {
    width: 58,
    height: 80,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },

  active: {
    borderWidth: 2,
    borderColor: '#3B82F6',
  },

  day: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111',
  },

  week: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },

  activeText: {
    color: '#2563EB',
  },

  dots: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 3,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#999',
  },

  activeDot: {
    backgroundColor: '#2563EB',
  },
});