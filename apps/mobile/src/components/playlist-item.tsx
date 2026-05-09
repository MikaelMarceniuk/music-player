import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Playlist {
  id: string;
  title: string;
  tracks: number;
  image?: any;
  isLiked?: boolean;
}

interface Props {
  playlist: Playlist;
  onPress: () => void;
  onOptions: () => void;
}

export default function PlaylistItem({ playlist, onPress, onOptions }: Props) {
  const renderThumbnail = () => {
    if (playlist.isLiked) {
      return (
        <View className="h-14 w-14 items-center justify-center rounded-xl bg-[#2a3a5c]">
          <Ionicons name="heart" size={24} color="#4fc3f7" />
        </View>
      );
    }
    return (
      <View className="h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-[#1e1e1e]">
        <Ionicons name="musical-notes" size={24} color="#555" />
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center gap-3 rounded-2xl bg-[#1a1a1a] p-3">
      {renderThumbnail()}

      <View className="flex-1">
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {playlist.title}
        </Text>
        <Text className="mt-0.5 text-sm text-[#888]">
          {playlist.tracks.toLocaleString()} Tracks
        </Text>
      </View>

      <TouchableOpacity
        onPress={onOptions}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        className="p-1">
        <Ionicons name="ellipsis-vertical" size={18} color="#666" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
