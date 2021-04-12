// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';


export type Weapon = {
    uuid: string,
    displayName: string,
    category: string,
    defaultSkinUuid: string,
    displayIcon: string,
    killStreamIcon: string,
    assetPath: string,
    weaponStats: WeaponStats,
    shopData: ShopData,
    skins: Skin[],
}

export type WeaponStats = {
    fireRate: number,
    magazineSize: number,
    runSpeedMultiplier: number,
    equipTimeSeconds: number,
    reloadTimeSeconds: number,
    firstBulletAccuracy: number,
    shotgunPelletCount: number,
    wallPenetration: string,
    feature: string,
    fireMode: string,
    altFireType: string,
    adsStats: AdsStats,
    altShotgunStats: AltShotgunStats,
    airBurstStats: AirBurstStats,
    damageRanges: DamageRanges,
}

export type AdsStats = {
    zoomMultiplier: number,
    fireRate: number,
    runSpeedMultiplier: number,
    burstCount: number,
    firstBulletAccuracy: number,
}

export type AltShotgunStats = {
    shotgunPelletCount: number,
    burstRate: number,
}

export type AirBurstStats = {
    shotgunPelletCount: number,
    burstDistance: number,
}

export type DamageRanges = {
    rangeStartMeters: number,
    rangeEndMeters: number,
    headDamage: number,
    bodyDamage: number,
    legDamage: number,
}

export type ShopData = {
    cost: number,
    category: string,
    categoryText: string,
    gridPosition: gridPosition,
    image: string,
    newImage: string,
    newImage2: string,
    assetPath: string,
}

export type gridPosition = {
    row: number,
    column: number,
}

export type Skin = {
    uuid: string,
    displayName: string,
    themeUuid: string,
    contentTierUuid: string,
    displayIcon: string,
    assetPath: string,
    chromas: Chroma[],
    levels: Level[],
}

export type Chroma = {
    uuid: string,
    displayName: string,
    displayIcon: string,
    fullRender: string,
    swatch: string,
    assetPath: string,
}

export type Level = {
    uuid: string,
    displayName: string,
    levelItem: string,
    displayIcon: string,
    assetPath: string,
}

export type WeaponProps = {
    weapon: Weapon
}

export type WeaponsProps = {
    weapons: Weapon[]
}

export type WeaponImage = {
    uuid:string,
    weaponName:string,
    path:string
}