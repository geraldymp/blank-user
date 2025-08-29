export interface IRenderItem {
  userId: number;
  id: number;
  title: string;
  body: string;
  onPress: () => void;
}
