export default class Transition {
    actor: number = 0;
    target: number = 0;
    
    // if either are blank, they are consumed by transition
    newActor: number = 0;
    newTarget: number = 0;

    // if actor is -1 and autoDecaySeconds is non-zero
    // then target decays to newTarget automatically in autoDecaySeconds
    // if -1, decays according to server epoch time setting
    autoDecaySeconds: number = 0;
    
    // flag that this decay time is epoch time
    // 0 of not epoch, or N for the number of epochs
    epochAutoDecay: number = 0;

    // specially flagged last-use transitions
    lastUseActor: number = 0;
    lastUseTarget: number = 0;
    
    // true if this transition undoes a use
    reverseUseActor: boolean = false;
    reverseUseTarget: boolean = false;
    
    // this transition does not decrement numUses of actor or target
    noUseActor: boolean = false;
    noUseTarget: boolean = false;
    
    // defaults to 0, which means that any transition on thje main
    // object with numUses can apply to generated useDummy objects
    // Higher values specify a cut-off point when the object becomes
    // "too used" to participate in the transition.
    // A value of 1.0f means that only the main object can participate
    // not the use dummy objects.
    actorMinUseFraction: number = 0.0;
    targetMinUseFraction: number = 0.0;

    // 0 for normal, non-moving transition
    // 1 for follow closest player
    // 2 for flee closest player
    // 3 for random movement
    // 4 for N
    // 5 for S
    // 6 for E
    // 7 for W
    move: number = 0;

    // for things that move longer distances per move
    desiredMoveDist: number = 0;
    
    // the likelihood of the actor or target changes happening
    // used by auto-generated transitions
    actorChangeChance: number = 1.0;
    targetChangeChance: number = 1.0;

    // what happens when changeChance doesn't happen
    newActorNoChange: number = -1;
    newTargetNoChange: number = -1;
    
}