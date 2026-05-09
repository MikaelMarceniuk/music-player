import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PlaylistItem from '@/src/components/playlist-item';
import MiniPlayer from '@/src/components/mini-player';
import AddPlaylistModal from '@/src/components/new-playlist-modal';

const RECENTLY_PLAYED = [
  { id: '1', title: 'Synthesizer Alpha', artist: 'Klara & The Machines' },
  { id: '2', title: 'Deep Frequencies', artist: 'Sub Level' },
  { id: '3', title: 'Signal Loss', artist: 'Data Stream' },
];

const INITIAL_TOP_PLAYLISTS = [
  { id: '1', title: 'Studio Masters', tracks: 142 },
  { id: '2', title: 'Deep Focus', tracks: 86 },
  { id: '3', title: 'Liked Songs', tracks: 1204, isLiked: true },
  { id: '4', title: 'Electronic Essentials', tracks: 53 },
];

export default function HomeScreen() {
  const router = useRouter();
  const [topPlaylists, setTopPlaylists] = useState(INITIAL_TOP_PLAYLISTS);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPlaylist = (name: string) => {
    setTopPlaylists((prev) => [...prev, { id: Date.now().toString(), title: name, tracks: 0 }]);
    setModalVisible(false);
  };

  const handlePlaylistOptions = (id: string) => {
    Alert.alert('Playlist Options', 'O que deseja fazer?', [
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => setTopPlaylists((prev) => prev.filter((p) => p.id !== id)),
      },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 bg-[#111111]">
      {/* Header */}
      <View className="flex-row items-center justify-between border-b border-b-[#2a2a2a] bg-black px-5 py-3">
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text className="text-xl font-bold tracking-widest text-white">AUDIOPHILE</Text>
        <TouchableOpacity>
          <View className="h-9 w-9 items-center justify-center rounded-full bg-[#2a2a2a]">
            <Ionicons name="person-circle-outline" size={36} color="#888" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Recently Played */}
        <View className="mb-6 mt-4">
          <View className="mb-4 flex-row items-center justify-between px-5">
            <Text className="text-xl font-bold text-white">Recently Played</Text>
            <TouchableOpacity
              // onPress={() => router.push('/recently-played')}
              className="flex-row items-center gap-1">
              <Text className="text-sm text-[#4fc3f7]">Ver tudo</Text>
              <Ionicons name="chevron-forward" size={14} color="#4fc3f7" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={RECENTLY_PLAYED}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
            renderItem={({ item }) => (
              <TouchableOpacity className="w-40">
                <View className="mb-2 h-40 w-40 items-center justify-center rounded-xl bg-[#1e1e1e]">
                  <Ionicons name="musical-notes" size={40} color="#4fc3f7" />
                </View>
                <Text className="text-sm font-semibold text-white" numberOfLines={1}>
                  {item.title}
                </Text>
                <Text className="mt-0.5 text-xs text-[#888]" numberOfLines={1}>
                  {item.artist}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Top Playlists */}
        <View className="mb-6 px-5">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-white">Top Playlists</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="flex-row items-center gap-1 rounded-full bg-[#4fc3f7]/10 px-3 py-1.5">
              <Ionicons name="add" size={16} color="#4fc3f7" />
              <Text className="text-sm font-medium text-[#4fc3f7]">Nova</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {topPlaylists.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                playlist={playlist}
                onPress={() => {}}
                onOptions={() => handlePlaylistOptions(playlist.id)}
              />
            ))}
          </View>
        </View>

        {/* Espaço para o MiniPlayer não cobrir conteúdo */}
        <View className="h-20" />
      </ScrollView>

      {/* Mini Player flutuante acima da tab bar */}
      <MiniPlayer
        title="Synthesizer Alpha"
        artist="Klara & The Machines"
        isPlaying={true}
        onPlayPause={() => {}}
        onNext={() => {}}
      />

      <AddPlaylistModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddPlaylist}
      />
    </SafeAreaView>
  );
}
