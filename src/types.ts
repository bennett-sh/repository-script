import type { RepositoryEntry } from './repositoryEntry/_index.js'
import { Float, Raw } from './values.js'

export type TDigitCharacter = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type TLowerHexCharacter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
export type TUpperHexCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type THexCharacter = TDigitCharacter | TLowerHexCharacter | TUpperHexCharacter
export type TLowerHex = (TDigitCharacter | TLowerHexCharacter)[]
export type TUpperHex = (TDigitCharacter | TUpperHexCharacter)[]
export type THex = THexCharacter[]
export type TIOIHash = `00${THexCharacter[14]}`
export type TUUIDv4 = `${THexCharacter[8]}-${THexCharacter[4]}-${THexCharacter[4]}-${THexCharacter[4]}-${THexCharacter[12]}` | string

export interface IRepositoryItemBase {
  ID_: string | RepositoryEntry;
  Image: string | RepositoryEntry;
  Name: string | RepositoryEntry;
  Outfit: string | RepositoryEntry;
  OutfitVariationIndex: number | Float;
  CharacterSetIndex: number | Float;
  Description: string | RepositoryEntry;
  Description_LOC: string | RepositoryEntry;
  Tile: string | RepositoryEntry;
  Name_LOC: string | RepositoryEntry;
  PersistentBoolId: string | RepositoryEntry;
  SetPointShootingAllowed: boolean;
  SetPointShootingCoolDownTime: number | Float;
  SetPointShootingMaxTags: number | Float;
  SetPointShootingTagTime: number | Float;
  ModifierType: string | RepositoryEntry;
  CommonName: string | RepositoryEntry;
  HeroDisguiseAvailable: boolean;
  IsHitmanSuit: boolean;
  Category: string | RepositoryEntry;
  ImageTransparent: string | RepositoryEntry;
  TokenID: string | RepositoryEntry;
  ActionRewardType: string | RepositoryEntry;
  CarryAnimSetType: string | RepositoryEntry;
  CheatSpawnGroup_Keys: boolean;
  EnablePickUpOnRelease: boolean;
  EquipAbility: string | RepositoryEntry;
  HolsterAbility: string | RepositoryEntry;
  HudIcon: string | RepositoryEntry;
  InventoryCategoryIcon: string | RepositoryEntry;
  InventoryCategoryName: string | RepositoryEntry;
  IsCheckedWhenFrisked: boolean;
  ItemHandsIdle: string | RepositoryEntry;
  ItemHandsUse: string | RepositoryEntry;
  ItemType: string | RepositoryEntry;
  MugshotTransformation: string | RepositoryEntry;
  OnlineTraits: (string | RepositoryEntry)[];
  Runtime: string | RepositoryEntry;
  Title: string | RepositoryEntry;
  AdditionalKeywords: (string | RepositoryEntry)[];
  AIPerceptibleOnRelease: boolean;
  AppliedModifiers: (string | RepositoryEntry)[];
  CanBeDropped: boolean;
  CanPistolWhip: boolean;
  CheatGroup: string | RepositoryEntry;
  CheatSpawnGroup_Everything: boolean;
  CheatSpawnGroup_Standard: boolean;
  CheatSpawnGroup_Tools: boolean;
  DetectShots: boolean;
  DisplayItemCategoryOnlineTraitsIndex: number | Float;
  ForbidCloseCombat: boolean;
  GripAnimType: string | RepositoryEntry;
  HarmlessImpact: boolean;
  HitmanCanConceal: boolean;
  InteractionTimeMultiplier: number | Float;
  IsCoin: boolean;
  IsExplosive: boolean;
  IsPerceivedAsWeapon: boolean;
  ItemHandsCoverAnimLayer: string | RepositoryEntry;
  ItemImpactForce: number | Float;
  ItemImpactUpkick: number | Float;
  ItemSize: string | RepositoryEntry;
  KillItemCategoryOnlineTraitsIndex: number | Float;
  KinematicWhileCarried: boolean;
  LocaKey: string | RepositoryEntry;
  MainAnimSetType: string | RepositoryEntry;
  ModifierSlot1: (string | RepositoryEntry)[];
  ModifierSlot2: (string | RepositoryEntry)[];
  ModifierSlot3: (string | RepositoryEntry)[];
  ModifierSlot4: (string | RepositoryEntry)[];
  ModifierSlot5: (string | RepositoryEntry)[];
  MugshotIsTransparent: boolean;
  NeverInvestigateDistractions: boolean;
  PlaceableType: string | RepositoryEntry;
  PlacementOrientToHM: boolean;
  PlacementUseHitNormal: boolean;
  RagdollImpactForce: number | Float;
  RagdollImpactUpkick: number | Float;
  RecognizableByCivilians: boolean;
  SpawnKinematic: boolean;
  Stackable: boolean;
  SupportItem: string | RepositoryEntry;
  ThrownCollisionLoudness: string | RepositoryEntry;
  ThrowType: string | RepositoryEntry;
  ThrowVelocity: number | Float;
  UseFakePutDownPhysics: boolean;
  AmmoItem: string | RepositoryEntry;
  CompareItem: string | RepositoryEntry;
  EnablePickUpOnSpawn: boolean;
  EnablePickUpOnThrowRelease: boolean;
  Evergreen_CapacityCost: number | Float;
  Evergreen_GiveWhenUnlocked: boolean;
  Evergreen_LoseOnWounded: boolean;
  Evergreen_Price: number | Float;
  Evergreen_Rarity: number | Float;
  Evergreen_UnlockChallenge: string | RepositoryEntry;
  Evergreen_UnlockEntitlement: string | RepositoryEntry;
  Evergreen_UnlockMastery: number | Float;
  ItemHUDType: string | RepositoryEntry;
  MeleeDamageBehavior: string | RepositoryEntry;
  OverrideItemThrowRotation: boolean;
  PoisonType: string | RepositoryEntry;
  RagdollImpactForceGlobal: number | Float;
  RagdollImpactUpkickGlobal: number | Float;
  Rarity: string | RepositoryEntry;
  ReverseItemThrowRotationDirection: boolean;
  ThrowImpactVisualRadius: number | Float;
  Contents: (string | RepositoryEntry)[];
  ReloadFactorMultiplier: number | Float;
  Features_: (string | RepositoryEntry)[];
  SetFullAutoOperation: boolean;
  AudioHighPassFilter: number | Float;
  RecoilZMultiplier: number | Float;
  ShotsPerMinuteMultiplier: number | Float;
  BlindfirePrecisionModifierMultiplier: number | Float;
  OTSCamPrecisionModifierMultiplier: number | Float;
  PrecisionMaxDegreeMultiplier: number | Float;
  PrecisionMinDegreeMultiplier: number | Float;
  PrecisionNumBulletsMultiplier: number | Float;
  PrecisionRecoveryDelayMultiplier: number | Float;
  PrecisionRecoverySpeedMultiplier: number | Float;
  PrecisionShotMultiplierMultiplier: number | Float;
  PrecisionUnaimedMaxDegreeMultiplier: number | Float;
  PrecisionUnaimedMinDegreeMultiplier: number | Float;
  RecoilDelayMultiplier: number | Float;
  RecoilDelayMultiplier_VR: number | Float;
  RecoilEaseTimeMultiplier: number | Float;
  RecoilEaseTimeMultiplier_VR: number | Float;
  RecoilHorizontalRangeMultiplier: number | Float;
  RecoilHorizontalRangeMultiplier_VR: number | Float;
  RecoilMaxMultiplier: number | Float;
  RecoilMaxMultiplier_VR: number | Float;
  RecoilRecoveryFractionMultiplier: number | Float;
  RecoilRecoveryFractionMultiplier_VR: number | Float;
  RecoilRecoveryTimeMultiplier: number | Float;
  RecoilRecoveryTimeMultiplier_VR: number | Float;
  RecoilVerticalRangeMultiplier: number | Float;
  RecoilVerticalRangeMultiplier_VR: number | Float;
  RecoilXMultiplier: number | Float;
  RecoilXMultiplier_VR: number | Float;
  RecoilZMultiplier_VR: number | Float;
  ScopeModePrecisionDegreeMultiplier: number | Float;
  SneakMovingPrecisionModifierMultiplier: number | Float;
  SneakNotMovingPrecisionModifierMultiplier: number | Float;
  StandNotMovingPrecisionModifierMultiplier: number | Float;
  ZRecoilDistanceMultiplier: number | Float;
  ZRecoilDistanceMultiplier_VR: number | Float;
  ZRecoilTimeMultiplier: number | Float;
  ZRecoilTimeMultiplier_VR: number | Float;
  AddInitialMagazines: number | Float;
  AddBulletsPerMagazine: number | Float;
  AddExtraPickupMagazines: number | Float;
  InitialBulletsModifier: number | Float;
  Perks: (string | RepositoryEntry)[];
  AudioHeadType: string | RepositoryEntry;
  AudioTailType: string | RepositoryEntry;
  AudioWeaponFamily: string | RepositoryEntry;
  ModelBodyPartSelections: (number | Float)[];
  ModelMuzzleExtensionSelection: number | Float;
  ModelMuzzleExtensionSkinSelection: number | Float;
  ModelSkinSelections: (number | Float)[];
  ActorConfiguration: IRepositoryConfiguration;
  AudioFireType: string | RepositoryEntry;
  AudioWeaponClass: string | RepositoryEntry;
  PrimaryConfiguration: IRepositoryConfiguration;
  SecondaryConfiguration: IRepositoryConfiguration;
  AudioExoticType: string | RepositoryEntry;
  AudioImpactType: string | RepositoryEntry;
  AudioLowPassFilter: number | Float;
  EffectFlashSelection: number | Float;
  EffectSmokeSelection: number | Float;
  ModelScopeSelection: number | Float;
  ModelScopeSkinSelection: number | Float;
  Multiplier: number | Float;
  AdaptiveTriggerEmptyMode: number | Float;
  AllowPrecisionShot: boolean;
  BlindfirePrecisionModifier: number | Float;
  BodyPartModifierArm: number | Float;
  BodyPartModifierFace: number | Float;
  BodyPartModifierHand: number | Float;
  BodyPartModifierHead: number | Float;
  BodyPartModifierLeg: number | Float;
  BodyPartModifierTorso: number | Float;
  CrosshairMaxAngleCap: number | Float;
  CrosshairModifierVisualOffset: number | Float;
  CrosshairOffset: number | Float;
  CrosshairScale: number | Float;
  CrosshairType: string | RepositoryEntry;
  DamageClose: number | Float;
  DamageFar: number | Float;
  DamageMedium: number | Float;
  DamageNear: number | Float;
  ExtraPickupMagazines: number | Float;
  HealthPercentToFall: number | Float;
  HitmanAutoreload: boolean;
  HitsNumberToFall: number | Float;
  ImpactForce: number | Float;
  MagazineConfigs: (string | RepositoryEntry)[];
  MuzzleVelocity: number | Float;
  OTSCamPrecisionModifier: number | Float;
  PrecisionMinDegree: number | Float;
  PrecisionNumBullets: number | Float;
  PrecisionRecoveryDelay: number | Float;
  PrecisionRecoverySpeed: number | Float;
  PrecisionShotMultiplier: number | Float;
  PrecisionUnaimedMaxDegree: number | Float;
  PrecisionUnaimedMinDegree: number | Float;
  RagdollImpactUpKick: number | Float;
  RangeClose: number | Float;
  RangeFar: number | Float;
  RangeMedium: number | Float;
  RangeNear: number | Float;
  RecoilDelay: number | Float;
  RecoilEaseTime: number | Float;
  RecoilHorizontalRange: number | Float;
  RecoilMax: number | Float;
  RecoilRecoveryFraction: number | Float;
  RecoilVertialRange: number | Float;
  RecoilX: number | Float;
  RecoilZ: number | Float;
  ScopeZoom: (string | RepositoryEntry)[];
  ShotsPerMinute: number | Float;
  SneakMovingPrecisionModifier: number | Float;
  SneakNotMovingPrecisionModifier: number | Float;
  StandMovingPrecisionModifier: number | Float;
  AdaptiveTriggerEmptyEnd: number | Float;
  AdaptiveTriggerEmptyFrequency: number | Float;
  AdaptiveTriggerEmptyStart: number | Float;
  AdaptiveTriggerEmptyStrength: number | Float;
  AdaptiveTriggerEnd: number | Float;
  AdaptiveTriggerFrequency: number | Float;
  AdaptiveTriggerLeftEnd: number | Float;
  AdaptiveTriggerLeftFrequency: number | Float;
  AdaptiveTriggerLeftMode: number | Float;
  AdaptiveTriggerLeftStart: number | Float;
  AdaptiveTriggerLeftStrength: number | Float;
  AdaptiveTriggerMode: number | Float;
  AdaptiveTriggerStart: number | Float;
  AdaptiveTriggerStrength: number | Float;
  AllowAimAssist: boolean;
  AllowPrecisionTimeSlowdown: boolean;
  AllowScopeTimeSlowdown: boolean;
  AmmoType: string | RepositoryEntry;
  AnalogPrecisionModeThreshold: number | Float;
  AnalogShootThreshold: number | Float;
  BobbingAngleX: string | RepositoryEntry;
  BobbingAngleY: string | RepositoryEntry;
  BobbingFrequencyX: string | RepositoryEntry;
  BobbingFrequencyY: string | RepositoryEntry;
  BulletsPerMagazine: number | Float;
  BurstAngleH: number | Float;
  BurstAngleV: number | Float;
  BurstPattern: string | RepositoryEntry;
  BurstRandomizationFactor: number | Float;
  CounterRotationFactor: number | Float;
  CrosshairDisplayHelpWhenNotAiming: boolean;
  DeathImpactEffect: string | RepositoryEntry;
  DragAngles: string | RepositoryEntry;
  DragCorrectionFraction: number | Float;
  DragCorrectionTime: number | Float;
  FullAutoOperation: boolean;
  HealthPercentTimeout: number | Float;
  HitsNumberTimeout: number | Float;
  ImpactEffect: string | RepositoryEntry;
  InitialMagazines: number | Float;
  MaxRange: number | Float;
  MuzzleEnergy: number | Float;
  PacifyTarget: boolean;
  Piercing: boolean;
  PointShootingAllowed: boolean;
  PointShootingCoolDownTime: number | Float;
  PointShootingMaxTags: number | Float;
  PointShootingTagTime: number | Float;
  PrecisionMaxDegree: number | Float;
  PrecisionShotAimTime: number | Float;
  PrecisionShotBulletSpeedMultiplier: number | Float;
  PrecisionShotDuration: number | Float;
  PrecisionShotTimeMultiplier: number | Float;
  ProjectilesPerShot: number | Float;
  PulseDecayFraction: number | Float;
  PulseDecayTime: number | Float;
  PulseIncreaseOnShooting: number | Float;
  PulseRun: number | Float;
  PulseWalkInc: number | Float;
  PulseWalkPulse: number | Float;
  RagdollImpactUpKickGlobal: number | Float;
  RecoilDelay_VR: number | Float;
  RecoilEaseTime_VR: number | Float;
  RecoilHorizontalRange_VR: number | Float;
  RecoilMax_VR: number | Float;
  RecoilRecoveryFraction_VR: number | Float;
  RecoilRecoveryTime: number | Float;
  RecoilRecoveryTime_VR: number | Float;
  RecoilVertialRange_VR: number | Float;
  RecoilX_VR: number | Float;
  RecoilZ_VR: number | Float;
  ReloadFactor: number | Float;
  ScopedPrecisionShotCameraSpeedMultiplier: number | Float;
  ScopeFOV: number | Float;
  ScopeFOV_VR: number | Float;
  ScopeModePrecisionDegree: number | Float;
  SilenceRating: string | RepositoryEntry;
  StandNotMovingPrecisionModifier: number | Float;
  ZRecoilDistance: number | Float;
  ZRecoilDistance_VR: number | Float;
  ZRecoilTime: number | Float;
  ZRecoilTime_VR: number | Float;
  AmmoCount: number | Float;
  Parameter: string | RepositoryEntry;
  Toggle: boolean;
  Value: number | Float;
  Count: number | Float;
  AmmoConfig: string | RepositoryEntry;
  MagazineSize: number | Float;
  MagazineIndex: number | Float;
  Tags: (string | RepositoryEntry)[];
  BobbingAngleXMultiplier: string | RepositoryEntry;
  BobbingAngleYMultiplier: string | RepositoryEntry;
  BobbingFrequencyXMultiplier: string | RepositoryEntry;
  BobbingFrequencyYMultiplier: string | RepositoryEntry;
  CounterRotationFactorMultiplier: number | Float;
  DragAnglesMultiplier: string | RepositoryEntry;
  DragCorrectionFractionMultiplier: number | Float;
  DragCorrectionTimeMultiplier: number | Float;
  PulseIncreaseOnShootingMultiplier: number | Float;
  AdditionalAmmo: number | Float;
  TargetMagazineTags: (string | RepositoryEntry)[];
  DamageFarMultiplier: number | Float;
  DamageMediumMultiplier: number | Float;
  DamageNearMultiplier: number | Float;
  DamageCloseMultiplier: number | Float;
  ImpactForceMultiplier: number | Float;
  RagdollImpactForceMultiplier: number | Float;
  RagdollImpactUpKickMultiplier: number | Float;
  SetAudioLowPassFilterIndex: number | Float;
  AddRangeMedium: number | Float;
  AddRangeClose: number | Float;
  AddRangeFar: number | Float;
  AddRangeNear: number | Float;
  BodyPartModifierArmMultiplier: number | Float;
  BodyPartModifierFaceMultiplier: number | Float;
  BodyPartModifierHandMultiplier: number | Float;
  BodyPartModifierHeadMultiplier: number | Float;
  BodyPartModifierLegMultiplier: number | Float;
  BodyPartModifierTorsoMultiplier: number | Float;
  AmmoImpactEffect: string | RepositoryEntry;
  AmmoInFlightEffect: string | RepositoryEntry;
  Behaviours: (string | RepositoryEntry)[];
  GravityOverride: number | Float;
  ImpactEffects: (string | RepositoryEntry)[];
  ScopeType: number | Float;
  UIKey: string | RepositoryEntry;
  DeathContext: string | RepositoryEntry;
  DeathType: string | RepositoryEntry;
  EffectsRangeMultiplier: number | Float;
  LiftMultiplier: number | Float;
  MassImpulseType: string | RepositoryEntry;
  PushOrigin: number | Float;
  RagdollImpulseMultiplier: number | Float;
  TargetRadii: number | Float;
  CenterStrength: number | Float;
  EffectsStrength: number | Float;
  LiftBias: number | Float;
  LiftSharpness: number | Float;
  PushBorder: number | Float;
  PushSharpness: number | Float;
  RespectsWalls: boolean;
  RotateMultiplier: number | Float;
  ShockwavePropagationSpeed: number | Float;
  TargetStrength: number | Float;
  Type: string | RepositoryEntry;
  SetModelBodyPartSelections: (number | Float)[];
  SetModelMuzzleExtensionSelection: number | Float;
  SetModelMuzzleExtensionSkinSelection: number | Float;
  SetModelScopeSelection: number | Float;
  SetModelScopeSkinSelection: number | Float;
  SetModelSkinSelections: (number | Float)[];
  Hint_: string | RepositoryEntry;
  Tags_: (string | RepositoryEntry)[];
  SetSilenceRating: string | RepositoryEntry;
  SetScopeZoom: (string | RepositoryEntry)[];
  MuzzleVelocityMultiplier: number | Float;
  HealthPercentTimeoutMultiplier: number | Float;
  HealthPercentToFallMultiplier: number | Float;
  HitsNumberTimeoutMultiplier: number | Float;
  HitsNumberToFallMultiplier: number | Float;
  AllowsHitReaction: boolean;
  PenetratesBodies: boolean;
  PenetratesEnvironment: boolean;
  SetAllowScopeTimeSlowdown: boolean;
  ItemImpactUpkickMultiplier: number | Float;
  RagdollImpactUpkickMultiplier: number | Float;
  SetThrowType: string | RepositoryEntry;
  UnconsciousTimeOnThrowMultiplier: number | Float;
  SetPiercing: boolean;
  SetAllowPrecisionTimeSlowdown: boolean;
  PrecisionShotTimeScaleMultiplier: number | Float;
  SetAllowPrecisionShot: boolean;
  BurstAngleHMultiplier: number | Float;
  BurstAngleVMultiplier: number | Float;
  BurstRandomizationFactorMultiplier: number | Float;
  Items: (string | RepositoryEntry)[];
  Guids: (string | RepositoryEntry)[];
  _popdensitycomment: string | RepositoryEntry;
}
export interface IRepositoryConfiguration {
  ID_: string | RepositoryEntry;
  AdaptiveTriggerEmptyMode: number | Float;
  AllowPrecisionShot: boolean;
  BlindfirePrecisionModifier: number | Float;
  BodyPartModifierFace: number | Float;
  BodyPartModifierHead: number | Float;
  BulletsPerMagazine: number | Float;
  CrosshairMaxAngleCap: number | Float;
  CrosshairOffset: number | Float;
  CrosshairScale: number | Float;
  CrosshairType: string | RepositoryEntry;
  DamageClose: number | Float;
  DamageFar: number | Float;
  DamageMedium: number | Float;
  DamageNear: number | Float;
  ExtraPickupMagazines: number | Float;
  HealthPercentTimeout: number | Float;
  HealthPercentToFall: number | Float;
  HitmanAutoreload: boolean;
  HitsNumberTimeout: number | Float;
  ImpactForce: number | Float;
  InitialMagazines: number | Float;
  MagazineConfigs: (string | RepositoryEntry)[];
  MuzzleVelocity: number | Float;
  OTSCamPrecisionModifier: number | Float;
  PointShootingTagTime: number | Float;
  PrecisionMaxDegree: number | Float;
  PrecisionMinDegree: number | Float;
  PrecisionNumBullets: number | Float;
  PrecisionRecoveryDelay: number | Float;
  PrecisionRecoverySpeed: number | Float;
  PrecisionShotMultiplier: number | Float;
  PrecisionUnaimedMaxDegree: number | Float;
  PrecisionUnaimedMinDegree: number | Float;
  RagdollImpactForce: number | Float;
  RagdollImpactUpKick: number | Float;
  RangeClose: number | Float;
  RangeFar: number | Float;
  RangeMedium: number | Float;
  RangeNear: number | Float;
  RecoilDelay: number | Float;
  RecoilEaseTime: number | Float;
  RecoilHorizontalRange: number | Float;
  RecoilMax: number | Float;
  RecoilRecoveryFraction: number | Float;
  RecoilRecoveryTime: number | Float;
  RecoilVertialRange: number | Float;
  RecoilX: number | Float;
  RecoilZ: number | Float;
  ScopeZoom: (string | RepositoryEntry)[];
  ShotsPerMinute: number | Float;
  SneakMovingPrecisionModifier: number | Float;
  SneakNotMovingPrecisionModifier: number | Float;
  StandMovingPrecisionModifier: number | Float;
  AdaptiveTriggerEmptyEnd: number | Float;
  AdaptiveTriggerEmptyFrequency: number | Float;
  AdaptiveTriggerEmptyStart: number | Float;
  AdaptiveTriggerEmptyStrength: number | Float;
  AdaptiveTriggerEnd: number | Float;
  AdaptiveTriggerFrequency: number | Float;
  AdaptiveTriggerLeftEnd: number | Float;
  AdaptiveTriggerLeftFrequency: number | Float;
  AdaptiveTriggerLeftMode: number | Float;
  AdaptiveTriggerLeftStart: number | Float;
  AdaptiveTriggerLeftStrength: number | Float;
  AdaptiveTriggerMode: number | Float;
  AdaptiveTriggerStart: number | Float;
  AdaptiveTriggerStrength: number | Float;
  AllowAimAssist: boolean;
  AllowPrecisionTimeSlowdown: boolean;
  AllowScopeTimeSlowdown: boolean;
  AmmoType: string | RepositoryEntry;
  AnalogPrecisionModeThreshold: number | Float;
  AnalogShootThreshold: number | Float;
  BobbingAngleX: string | RepositoryEntry;
  BobbingAngleY: string | RepositoryEntry;
  BobbingFrequencyX: string | RepositoryEntry;
  BobbingFrequencyY: string | RepositoryEntry;
  BodyPartModifierArm: number | Float;
  BodyPartModifierHand: number | Float;
  BodyPartModifierLeg: number | Float;
  BodyPartModifierTorso: number | Float;
  BurstAngleH: number | Float;
  BurstAngleV: number | Float;
  BurstPattern: string | RepositoryEntry;
  BurstRandomizationFactor: number | Float;
  CounterRotationFactor: number | Float;
  CrosshairDisplayHelpWhenNotAiming: boolean;
  CrosshairModifierVisualOffset: number | Float;
  DeathImpactEffect: string | RepositoryEntry;
  DragAngles: string | RepositoryEntry;
  DragCorrectionFraction: number | Float;
  DragCorrectionTime: number | Float;
  FullAutoOperation: boolean;
  HitsNumberToFall: number | Float;
  ImpactEffect: string | RepositoryEntry;
  MaxRange: number | Float;
  MuzzleEnergy: number | Float;
  PacifyTarget: boolean;
  Perks: (string | RepositoryEntry)[];
  Piercing: boolean;
  PointShootingAllowed: boolean;
  PointShootingCoolDownTime: number | Float;
  PointShootingMaxTags: number | Float;
  PrecisionShotAimTime: number | Float;
  PrecisionShotBulletSpeedMultiplier: number | Float;
  PrecisionShotDuration: number | Float;
  PrecisionShotTimeMultiplier: number | Float;
  ProjectilesPerShot: number | Float;
  PulseDecayFraction: number | Float;
  PulseDecayTime: number | Float;
  PulseIncreaseOnShooting: number | Float;
  PulseRun: number | Float;
  PulseWalkInc: number | Float;
  PulseWalkPulse: number | Float;
  RagdollImpactForceGlobal: number | Float;
  RagdollImpactUpKickGlobal: number | Float;
  RecoilDelay_VR: number | Float;
  RecoilEaseTime_VR: number | Float;
  RecoilHorizontalRange_VR: number | Float;
  RecoilMax_VR: number | Float;
  RecoilRecoveryFraction_VR: number | Float;
  RecoilRecoveryTime_VR: number | Float;
  RecoilVertialRange_VR: number | Float;
  RecoilX_VR: number | Float;
  RecoilZ_VR: number | Float;
  ReloadFactor: number | Float;
  ScopedPrecisionShotCameraSpeedMultiplier: number | Float;
  ScopeFOV: number | Float;
  ScopeFOV_VR: number | Float;
  ScopeModePrecisionDegree: number | Float;
  SilenceRating: string | RepositoryEntry;
  StandNotMovingPrecisionModifier: number | Float;
  ZRecoilDistance: number | Float;
  ZRecoilDistance_VR: number | Float;
  ZRecoilTime: number | Float;
  ZRecoilTime_VR: number | Float;
}

export type IRepositoryItem = Partial<IRepositoryItemBase> & Record<string, string | number | boolean | Raw | Float | any[] | {[key: string]: any}>
export type IRepository = Map<TUUIDv4, IRepositoryItem>
