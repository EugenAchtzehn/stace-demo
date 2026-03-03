export interface ManagedLayerParams {
  opacity: number;
  subType?: string;
  [key: string]: unknown;
}

export interface ManagedLayerMeta {
  name: string;
  type: string;
  params: ManagedLayerParams;
}

export interface ManagedLayerViewModel extends ManagedLayerMeta {
  id: number;
}

export interface LayerOpacityChangePayload {
  id: number;
  opacity: number;
}
