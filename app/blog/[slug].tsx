import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import * as Posts from "@/posts"; // all MDX files re-exported here
import { useLocalSearchParams } from "expo-router";

export default function BlogPost() {
  const { slug } = useLocalSearchParams();
  const Post = Posts[slug as keyof typeof Posts];

  if (!Post) return <ThemedText>Post not found</ThemedText>;

  return (
    <ThemedView style={{ padding: 20, flex: 1 }}>
      <Post />
    </ThemedView>
  );
}
