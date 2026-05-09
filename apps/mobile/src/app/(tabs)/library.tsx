import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LibraryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#111111]">
      <View className="flex-1 items-center justify-center gap-4">
        <Ionicons name="musical-note-outline" size={56} color="#4fc3f7" />
        <Text className="text-2xl font-bold tracking-widest text-white">LIBRARY</Text>
        <Text className="text-sm text-[#666]">Navegação funcionando ✓</Text>
      </View>
    </SafeAreaView>
  );
}
