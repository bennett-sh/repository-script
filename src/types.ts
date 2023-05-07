
export type TDigitCharacter = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type TLowerHexCharacter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
export type TUpperHexCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type THexCharacter = TDigitCharacter | TLowerHexCharacter | TUpperHexCharacter
export type TLowerHex = (TDigitCharacter | TLowerHexCharacter)[]
export type TUpperHex = (TDigitCharacter | TUpperHexCharacter)[]
export type THex = THexCharacter[]
export type TIOIHash = `00${THexCharacter[14]}`
export type TUUIDv4 = `${THexCharacter[8]}-${THexCharacter[4]}-${THexCharacter[4]}-${THexCharacter[4]}-${THexCharacter[12]}` | string

export interface IRepositoryEntryBase {
  ID_: string;
  Image: string;
  Name: string;
  Outfit: string;
  OutfitVariationIndex: number;
  CharacterSetIndex: number;
  Description: string;
  Description_LOC: string;
  Tile: string;
  Name_LOC: string;
  PersistentBoolId: string;
  SetPointShootingAllowed: boolean;
  SetPointShootingCoolDownTime: number;
  SetPointShootingMaxTags: number;
  SetPointShootingTagTime: number;
  ModifierType: string;
  CommonName: string;
  HeroDisguiseAvailable: boolean;
  IsHitmanSuit: boolean;
  Category: string;
  ImageTransparent: string;
  TokenID: string;
  ActionRewardType: string;
  CarryAnimSetType: string;
  CheatSpawnGroup_Keys: boolean;
  EnablePickUpOnRelease: boolean;
  EquipAbility: string;
  HolsterAbility: string;
  HudIcon: string;
  InventoryCategoryIcon: string;
  InventoryCategoryName: string;
  IsCheckedWhenFrisked: boolean;
  ItemHandsIdle: string;
  ItemHandsUse: string;
  ItemType: string;
  MugshotTransformation: string;
  OnlineTraits: string[];
  Runtime: string;
  Title: string;
  AdditionalKeywords: string[];
  AIPerceptibleOnRelease: boolean;
  AppliedModifiers: string[];
  CanBeDropped: boolean;
  CanPistolWhip: boolean;
  CheatGroup: string;
  CheatSpawnGroup_Everything: boolean;
  CheatSpawnGroup_Standard: boolean;
  CheatSpawnGroup_Tools: boolean;
  DetectShots: boolean;
  DisplayItemCategoryOnlineTraitsIndex: number;
  ForbidCloseCombat: boolean;
  GripAnimType: string;
  HarmlessImpact: boolean;
  HitmanCanConceal: boolean;
  InteractionTimeMultiplier: number;
  IsCoin: boolean;
  IsExplosive: boolean;
  IsPerceivedAsWeapon: boolean;
  ItemHandsCoverAnimLayer: string;
  ItemImpactForce: number;
  ItemImpactUpkick: number;
  ItemSize: string;
  KillItemCategoryOnlineTraitsIndex: number;
  KinematicWhileCarried: boolean;
  LocaKey: string;
  MainAnimSetType: string;
  ModifierSlot1: string[];
  ModifierSlot2: string[];
  ModifierSlot3: string[];
  ModifierSlot4: string[];
  ModifierSlot5: string[];
  MugshotIsTransparent: boolean;
  NeverInvestigateDistractions: boolean;
  PlaceableType: string;
  PlacementOrientToHM: boolean;
  PlacementUseHitNormal: boolean;
  RagdollImpactForce: number;
  RagdollImpactUpkick: number;
  RecognizableByCivilians: boolean;
  SpawnKinematic: boolean;
  Stackable: boolean;
  SupportItem: string;
  ThrownCollisionLoudness: string;
  ThrowType: string;
  ThrowVelocity: number;
  UseFakePutDownPhysics: boolean;
  AmmoItem: string;
  CompareItem: string;
  EnablePickUpOnSpawn: boolean;
  EnablePickUpOnThrowRelease: boolean;
  Evergreen_CapacityCost: number;
  Evergreen_GiveWhenUnlocked: boolean;
  Evergreen_LoseOnWounded: boolean;
  Evergreen_Price: number;
  Evergreen_Rarity: number;
  Evergreen_UnlockChallenge: string;
  Evergreen_UnlockEntitlement: string;
  Evergreen_UnlockMastery: number;
  ItemHUDType: string;
  MeleeDamageBehavior: string;
  OverrideItemThrowRotation: boolean;
  PoisonType: string;
  RagdollImpactForceGlobal: number;
  RagdollImpactUpkickGlobal: number;
  Rarity: string;
  ReverseItemThrowRotationDirection: boolean;
  ThrowImpactVisualRadius: number;
  Contents: string[];
  ReloadFactorMultiplier: number;
  Features_: string[];
  SetFullAutoOperation: boolean;
  AudioHighPassFilter: number;
  RecoilZMultiplier: number;
  ShotsPerMinuteMultiplier: number;
  BlindfirePrecisionModifierMultiplier: number;
  OTSCamPrecisionModifierMultiplier: number;
  PrecisionMaxDegreeMultiplier: number;
  PrecisionMinDegreeMultiplier: number;
  PrecisionNumBulletsMultiplier: number;
  PrecisionRecoveryDelayMultiplier: number;
  PrecisionRecoverySpeedMultiplier: number;
  PrecisionShotMultiplierMultiplier: number;
  PrecisionUnaimedMaxDegreeMultiplier: number;
  PrecisionUnaimedMinDegreeMultiplier: number;
  RecoilDelayMultiplier: number;
  RecoilDelayMultiplier_VR: number;
  RecoilEaseTimeMultiplier: number;
  RecoilEaseTimeMultiplier_VR: number;
  RecoilHorizontalRangeMultiplier: number;
  RecoilHorizontalRangeMultiplier_VR: number;
  RecoilMaxMultiplier: number;
  RecoilMaxMultiplier_VR: number;
  RecoilRecoveryFractionMultiplier: number;
  RecoilRecoveryFractionMultiplier_VR: number;
  RecoilRecoveryTimeMultiplier: number;
  RecoilRecoveryTimeMultiplier_VR: number;
  RecoilVerticalRangeMultiplier: number;
  RecoilVerticalRangeMultiplier_VR: number;
  RecoilXMultiplier: number;
  RecoilXMultiplier_VR: number;
  RecoilZMultiplier_VR: number;
  ScopeModePrecisionDegreeMultiplier: number;
  SneakMovingPrecisionModifierMultiplier: number;
  SneakNotMovingPrecisionModifierMultiplier: number;
  StandNotMovingPrecisionModifierMultiplier: number;
  ZRecoilDistanceMultiplier: number;
  ZRecoilDistanceMultiplier_VR: number;
  ZRecoilTimeMultiplier: number;
  ZRecoilTimeMultiplier_VR: number;
  AddInitialMagazines: number;
  AddBulletsPerMagazine: number;
  AddExtraPickupMagazines: number;
  InitialBulletsModifier: number;
  Perks: string[];
  AudioHeadType: string;
  AudioTailType: string;
  AudioWeaponFamily: string;
  ModelBodyPartSelections: number[];
  ModelMuzzleExtensionSelection: number;
  ModelMuzzleExtensionSkinSelection: number;
  ModelSkinSelections: number[];
  ActorConfiguration: IRepositoryConfiguration;
  AudioFireType: string;
  AudioWeaponClass: string;
  PrimaryConfiguration: IRepositoryConfiguration;
  SecondaryConfiguration: IRepositoryConfiguration;
  AudioExoticType: string;
  AudioImpactType: string;
  AudioLowPassFilter: number;
  EffectFlashSelection: number;
  EffectSmokeSelection: number;
  ModelScopeSelection: number;
  ModelScopeSkinSelection: number;
  Multiplier: number;
  AdaptiveTriggerEmptyMode: number;
  AllowPrecisionShot: boolean;
  BlindfirePrecisionModifier: number;
  BodyPartModifierArm: number;
  BodyPartModifierFace: number;
  BodyPartModifierHand: number;
  BodyPartModifierHead: number;
  BodyPartModifierLeg: number;
  BodyPartModifierTorso: number;
  CrosshairMaxAngleCap: number;
  CrosshairModifierVisualOffset: number;
  CrosshairOffset: number;
  CrosshairScale: number;
  CrosshairType: string;
  DamageClose: number;
  DamageFar: number;
  DamageMedium: number;
  DamageNear: number;
  ExtraPickupMagazines: number;
  HealthPercentToFall: number;
  HitmanAutoreload: boolean;
  HitsNumberToFall: number;
  ImpactForce: number;
  MagazineConfigs: string[];
  MuzzleVelocity: number;
  OTSCamPrecisionModifier: number;
  PrecisionMinDegree: number;
  PrecisionNumBullets: number;
  PrecisionRecoveryDelay: number;
  PrecisionRecoverySpeed: number;
  PrecisionShotMultiplier: number;
  PrecisionUnaimedMaxDegree: number;
  PrecisionUnaimedMinDegree: number;
  RagdollImpactUpKick: number;
  RangeClose: number;
  RangeFar: number;
  RangeMedium: number;
  RangeNear: number;
  RecoilDelay: number;
  RecoilEaseTime: number;
  RecoilHorizontalRange: number;
  RecoilMax: number;
  RecoilRecoveryFraction: number;
  RecoilVertialRange: number;
  RecoilX: number;
  RecoilZ: number;
  ScopeZoom: string[];
  ShotsPerMinute: number;
  SneakMovingPrecisionModifier: number;
  SneakNotMovingPrecisionModifier: number;
  StandMovingPrecisionModifier: number;
  AdaptiveTriggerEmptyEnd: number;
  AdaptiveTriggerEmptyFrequency: number;
  AdaptiveTriggerEmptyStart: number;
  AdaptiveTriggerEmptyStrength: number;
  AdaptiveTriggerEnd: number;
  AdaptiveTriggerFrequency: number;
  AdaptiveTriggerLeftEnd: number;
  AdaptiveTriggerLeftFrequency: number;
  AdaptiveTriggerLeftMode: number;
  AdaptiveTriggerLeftStart: number;
  AdaptiveTriggerLeftStrength: number;
  AdaptiveTriggerMode: number;
  AdaptiveTriggerStart: number;
  AdaptiveTriggerStrength: number;
  AllowAimAssist: boolean;
  AllowPrecisionTimeSlowdown: boolean;
  AllowScopeTimeSlowdown: boolean;
  AmmoType: string;
  AnalogPrecisionModeThreshold: number;
  AnalogShootThreshold: number;
  BobbingAngleX: string;
  BobbingAngleY: string;
  BobbingFrequencyX: string;
  BobbingFrequencyY: string;
  BulletsPerMagazine: number;
  BurstAngleH: number;
  BurstAngleV: number;
  BurstPattern: string;
  BurstRandomizationFactor: number;
  CounterRotationFactor: number;
  CrosshairDisplayHelpWhenNotAiming: boolean;
  DeathImpactEffect: string;
  DragAngles: string;
  DragCorrectionFraction: number;
  DragCorrectionTime: number;
  FullAutoOperation: boolean;
  HealthPercentTimeout: number;
  HitsNumberTimeout: number;
  ImpactEffect: string;
  InitialMagazines: number;
  MaxRange: number;
  MuzzleEnergy: number;
  PacifyTarget: boolean;
  Piercing: boolean;
  PointShootingAllowed: boolean;
  PointShootingCoolDownTime: number;
  PointShootingMaxTags: number;
  PointShootingTagTime: number;
  PrecisionMaxDegree: number;
  PrecisionShotAimTime: number;
  PrecisionShotBulletSpeedMultiplier: number;
  PrecisionShotDuration: number;
  PrecisionShotTimeMultiplier: number;
  ProjectilesPerShot: number;
  PulseDecayFraction: number;
  PulseDecayTime: number;
  PulseIncreaseOnShooting: number;
  PulseRun: number;
  PulseWalkInc: number;
  PulseWalkPulse: number;
  RagdollImpactUpKickGlobal: number;
  RecoilDelay_VR: number;
  RecoilEaseTime_VR: number;
  RecoilHorizontalRange_VR: number;
  RecoilMax_VR: number;
  RecoilRecoveryFraction_VR: number;
  RecoilRecoveryTime: number;
  RecoilRecoveryTime_VR: number;
  RecoilVertialRange_VR: number;
  RecoilX_VR: number;
  RecoilZ_VR: number;
  ReloadFactor: number;
  ScopedPrecisionShotCameraSpeedMultiplier: number;
  ScopeFOV: number;
  ScopeFOV_VR: number;
  ScopeModePrecisionDegree: number;
  SilenceRating: string;
  StandNotMovingPrecisionModifier: number;
  ZRecoilDistance: number;
  ZRecoilDistance_VR: number;
  ZRecoilTime: number;
  ZRecoilTime_VR: number;
  AmmoCount: number;
  Parameter: string;
  Toggle: boolean;
  Value: number;
  Count: number;
  AmmoConfig: string;
  MagazineSize: number;
  MagazineIndex: number;
  Tags: string[];
  BobbingAngleXMultiplier: string;
  BobbingAngleYMultiplier: string;
  BobbingFrequencyXMultiplier: string;
  BobbingFrequencyYMultiplier: string;
  CounterRotationFactorMultiplier: number;
  DragAnglesMultiplier: string;
  DragCorrectionFractionMultiplier: number;
  DragCorrectionTimeMultiplier: number;
  PulseIncreaseOnShootingMultiplier: number;
  AdditionalAmmo: number;
  TargetMagazineTags: string[];
  DamageFarMultiplier: number;
  DamageMediumMultiplier: number;
  DamageNearMultiplier: number;
  DamageCloseMultiplier: number;
  ImpactForceMultiplier: number;
  RagdollImpactForceMultiplier: number;
  RagdollImpactUpKickMultiplier: number;
  SetAudioLowPassFilterIndex: number;
  AddRangeMedium: number;
  AddRangeClose: number;
  AddRangeFar: number;
  AddRangeNear: number;
  BodyPartModifierArmMultiplier: number;
  BodyPartModifierFaceMultiplier: number;
  BodyPartModifierHandMultiplier: number;
  BodyPartModifierHeadMultiplier: number;
  BodyPartModifierLegMultiplier: number;
  BodyPartModifierTorsoMultiplier: number;
  AmmoImpactEffect: string;
  AmmoInFlightEffect: string;
  Behaviours: string[];
  GravityOverride: number;
  ImpactEffects: string[];
  ScopeType: number;
  UIKey: string;
  DeathContext: string;
  DeathType: string;
  EffectsRangeMultiplier: number;
  LiftMultiplier: number;
  MassImpulseType: string;
  PushOrigin: number;
  RagdollImpulseMultiplier: number;
  TargetRadii: number;
  CenterStrength: number;
  EffectsStrength: number;
  LiftBias: number;
  LiftSharpness: number;
  PushBorder: number;
  PushSharpness: number;
  RespectsWalls: boolean;
  RotateMultiplier: number;
  ShockwavePropagationSpeed: number;
  TargetStrength: number;
  Type: string;
  SetModelBodyPartSelections: number[];
  SetModelMuzzleExtensionSelection: number;
  SetModelMuzzleExtensionSkinSelection: number;
  SetModelScopeSelection: number;
  SetModelScopeSkinSelection: number;
  SetModelSkinSelections: number[];
  Hint_: string;
  Tags_: string[];
  SetSilenceRating: string;
  SetScopeZoom: string[];
  MuzzleVelocityMultiplier: number;
  HealthPercentTimeoutMultiplier: number;
  HealthPercentToFallMultiplier: number;
  HitsNumberTimeoutMultiplier: number;
  HitsNumberToFallMultiplier: number;
  AllowsHitReaction: boolean;
  PenetratesBodies: boolean;
  PenetratesEnvironment: boolean;
  SetAllowScopeTimeSlowdown: boolean;
  ItemImpactUpkickMultiplier: number;
  RagdollImpactUpkickMultiplier: number;
  SetThrowType: string;
  UnconsciousTimeOnThrowMultiplier: number;
  SetPiercing: boolean;
  SetAllowPrecisionTimeSlowdown: boolean;
  PrecisionShotTimeScaleMultiplier: number;
  SetAllowPrecisionShot: boolean;
  BurstAngleHMultiplier: number;
  BurstAngleVMultiplier: number;
  BurstRandomizationFactorMultiplier: number;
  Items: string[];
  Guids: string[];
  _popdensitycomment: string;
}
export interface IRepositoryConfiguration {
  ID_: string;
  AdaptiveTriggerEmptyMode: number;
  AllowPrecisionShot: boolean;
  BlindfirePrecisionModifier: number;
  BodyPartModifierFace: number;
  BodyPartModifierHead: number;
  BulletsPerMagazine: number;
  CrosshairMaxAngleCap: number;
  CrosshairOffset: number;
  CrosshairScale: number;
  CrosshairType: string;
  DamageClose: number;
  DamageFar: number;
  DamageMedium: number;
  DamageNear: number;
  ExtraPickupMagazines: number;
  HealthPercentTimeout: number;
  HealthPercentToFall: number;
  HitmanAutoreload: boolean;
  HitsNumberTimeout: number;
  ImpactForce: number;
  InitialMagazines: number;
  MagazineConfigs: string[];
  MuzzleVelocity: number;
  OTSCamPrecisionModifier: number;
  PointShootingTagTime: number;
  PrecisionMaxDegree: number;
  PrecisionMinDegree: number;
  PrecisionNumBullets: number;
  PrecisionRecoveryDelay: number;
  PrecisionRecoverySpeed: number;
  PrecisionShotMultiplier: number;
  PrecisionUnaimedMaxDegree: number;
  PrecisionUnaimedMinDegree: number;
  RagdollImpactForce: number;
  RagdollImpactUpKick: number;
  RangeClose: number;
  RangeFar: number;
  RangeMedium: number;
  RangeNear: number;
  RecoilDelay: number;
  RecoilEaseTime: number;
  RecoilHorizontalRange: number;
  RecoilMax: number;
  RecoilRecoveryFraction: number;
  RecoilRecoveryTime: number;
  RecoilVertialRange: number;
  RecoilX: number;
  RecoilZ: number;
  ScopeZoom: string[];
  ShotsPerMinute: number;
  SneakMovingPrecisionModifier: number;
  SneakNotMovingPrecisionModifier: number;
  StandMovingPrecisionModifier: number;
  AdaptiveTriggerEmptyEnd: number;
  AdaptiveTriggerEmptyFrequency: number;
  AdaptiveTriggerEmptyStart: number;
  AdaptiveTriggerEmptyStrength: number;
  AdaptiveTriggerEnd: number;
  AdaptiveTriggerFrequency: number;
  AdaptiveTriggerLeftEnd: number;
  AdaptiveTriggerLeftFrequency: number;
  AdaptiveTriggerLeftMode: number;
  AdaptiveTriggerLeftStart: number;
  AdaptiveTriggerLeftStrength: number;
  AdaptiveTriggerMode: number;
  AdaptiveTriggerStart: number;
  AdaptiveTriggerStrength: number;
  AllowAimAssist: boolean;
  AllowPrecisionTimeSlowdown: boolean;
  AllowScopeTimeSlowdown: boolean;
  AmmoType: string;
  AnalogPrecisionModeThreshold: number;
  AnalogShootThreshold: number;
  BobbingAngleX: string;
  BobbingAngleY: string;
  BobbingFrequencyX: string;
  BobbingFrequencyY: string;
  BodyPartModifierArm: number;
  BodyPartModifierHand: number;
  BodyPartModifierLeg: number;
  BodyPartModifierTorso: number;
  BurstAngleH: number;
  BurstAngleV: number;
  BurstPattern: string;
  BurstRandomizationFactor: number;
  CounterRotationFactor: number;
  CrosshairDisplayHelpWhenNotAiming: boolean;
  CrosshairModifierVisualOffset: number;
  DeathImpactEffect: string;
  DragAngles: string;
  DragCorrectionFraction: number;
  DragCorrectionTime: number;
  FullAutoOperation: boolean;
  HitsNumberToFall: number;
  ImpactEffect: string;
  MaxRange: number;
  MuzzleEnergy: number;
  PacifyTarget: boolean;
  Perks: string[];
  Piercing: boolean;
  PointShootingAllowed: boolean;
  PointShootingCoolDownTime: number;
  PointShootingMaxTags: number;
  PrecisionShotAimTime: number;
  PrecisionShotBulletSpeedMultiplier: number;
  PrecisionShotDuration: number;
  PrecisionShotTimeMultiplier: number;
  ProjectilesPerShot: number;
  PulseDecayFraction: number;
  PulseDecayTime: number;
  PulseIncreaseOnShooting: number;
  PulseRun: number;
  PulseWalkInc: number;
  PulseWalkPulse: number;
  RagdollImpactForceGlobal: number;
  RagdollImpactUpKickGlobal: number;
  RecoilDelay_VR: number;
  RecoilEaseTime_VR: number;
  RecoilHorizontalRange_VR: number;
  RecoilMax_VR: number;
  RecoilRecoveryFraction_VR: number;
  RecoilRecoveryTime_VR: number;
  RecoilVertialRange_VR: number;
  RecoilX_VR: number;
  RecoilZ_VR: number;
  ReloadFactor: number;
  ScopedPrecisionShotCameraSpeedMultiplier: number;
  ScopeFOV: number;
  ScopeFOV_VR: number;
  ScopeModePrecisionDegree: number;
  SilenceRating: string;
  StandNotMovingPrecisionModifier: number;
  ZRecoilDistance: number;
  ZRecoilDistance_VR: number;
  ZRecoilTime: number;
  ZRecoilTime_VR: number;
}
export type IRepositoryEntry = Partial<IRepositoryEntryBase> & Record<string, string | number | boolean | any[] | {[key: string]: any}>
export type IRepository = Map<TUUIDv4, IRepositoryEntry>
