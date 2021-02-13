import { RoomGroup } from '@/models/BackendModel'

export default interface ClientModel {
  uuid: string;
  name: string;
  pose: Pose;
  group: RoomGroup;
  isImposter: boolean;
}

export interface Pose {
  x: number;
  y: number;
}

export interface RemoteStreamModel {
  uuid: string;
  source: MediaStreamAudioSourceNode;
  gainNode: GainNode;
  volumeNode: GainNode;
  pannerNode: PannerNode;
  remoteStream: MediaStream;
}

export interface MyMicModel {
  volumeNode: GainNode | undefined;
  destStream: MediaStreamAudioDestinationNode | undefined;
}
