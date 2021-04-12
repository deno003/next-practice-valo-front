// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type AllContents = {
  version: string,
  characters: Content[],
  maps: Content[],
  chromas: Content[],
  skins: Content[],
  skinLevels: Content[],
  equips: Content[],
  gameModes: Content[],
  sprays: Content[],
  sprayLevels: Content[],
  charms: Content[],
  charmLevels: Content[],
  playerCards: Content[],
  playerTitles: Content[],
  acts: Act[]
}

export type Content = {
  name: string,
  id: string,
  assetName: string,
  assetPath: string
}

export type ContentProps = {
  content: Content
}

export type ContentsProps = {
  contents: Content[]
}

export type Act = {
  id: string,
  parentId: string,
  type: string,
  name: string,
  isActive: string
}

export type Agent = {
  uuid: string,
  displayName: string,
  description: string,
  developerName: string,
  characterTags: string[],
  displayIcon: string,
  displayIconSmall: string,
  bustPortrait: string,
  fullPortrait: string,
  assetPath: string,
  isFullPortraitRightFacing: boolean,
  isPlayableCharacter: boolean,
  isAvailableForTest: boolean,
  role: Role,
  abilities: Abilities
}

export type Role = {
  uuid: string,
  displayName: string,
  description: string,
  displayIcon: string,
  assetPath: string
}

export type Abilities = {
  slot: string,
  displayName: string,
  description: string,
  displayIcon: string
}

export type AgentProps = {
  agent: Agent
}

export type AgentsProps = {
  agents: Agent[]
}

export type Map = {
  uuid: string,
  displayName: string,
  coordinates: string,
  displayIcon: string,
  listViewIcon: string,
  splash: string,
  assetPath: string,
  mapUrl: string,
  xMultiplier: string,
  yMultiplier: string,
  xScalarToAdd: string,
  yScalarToAdd: string
}

export type MapProps = {
  map:Map
}

export type MapsProps = {
  maps:Map[]
}

export type MapUuidProps = {
  mapUuid:string
}

export type MapText = {
  uuid:string,
  mapName:string,
  text:string
}