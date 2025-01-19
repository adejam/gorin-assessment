import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

interface AvatarGroupProps {
  avatars: any[]; // Array of avatar image URLs
  size?: number; // Size of each avatar
  max?: number; // Maximum number of avatars to display
  overlap?: number; // Overlap size
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  size = 40,
  max = 3,
  overlap = 10,
}) => {
  const displayedAvatars = avatars.slice(0, max); // Limit avatars to display
  const extraCount = avatars.length - max; // Calculate the "+N" count

  return (
    <View style={[styles.container, { paddingLeft: overlap }]}>
      {displayedAvatars.map((avatar, index) => (
        <Image
          key={index}
          source={avatar}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: index === 0 ? 0 : -overlap,
            },
          ]}
        />
      ))}

      {extraCount > 0 && (
        <View
          style={[
            styles.extraAvatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: -overlap,
            },
          ]}
        >
          <Text style={styles.extraText}>+{extraCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'white', // Add a white border for better visibility
  },
  extraAvatar: {
    backgroundColor: colors.primary, // Gray background for "+N" avatar
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  extraText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AvatarGroup;
