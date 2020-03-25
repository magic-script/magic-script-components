declare module "magic-script-components" {

  export class XrClientProvider {
    static getXrClient(): XrClientBridge;
    static setXrClient(xrClient: XrClientBridge): void;
  }

  /**
   * React native wrapper for the native XR SDK client.
   */
  export interface XrClientBridge {
    /**
     * Starts an XR session.
     *
     * This must be called before any other method.
     *
     * @param token The auth token obtained via Magic Leap OAuth login
     * @return async status string
     */
    connect: (token: string) => Promise<string>;

    /**
     * Sets the update interval for PCF polling
     *
     * @param interval The update interval in milliseconds
     * @return async status string
     */
    setUpdateInterval: (interval: number) => Promise<string>;

    /**
     * Polls for list of all PCFs
     *
     * @return async list of PCFs
     */
    getAllPCFs: () => Promise<PcfData[]>;

    /**
     * Returns the current localization status
     *
     * @return async localization status
     */
    getLocalizationStatus: () => Promise<string>;

    /**
     * Creates an anchor that can be used to position AR content
     *
     * @param anchorId The unique identifier for this anchor
     * @param position The position of this anchor
     * @return async status string
     */
    createAnchor: (anchorId: string, position: Pose) => Promise<string>;

    /**
     * Removes the anchor with the given ID.
     *
     * @param anchorId The unique identifier for the anchor to remove
     * @return async status string
     */
    removeAnchor: (anchorId: string) => Promise<string>;

    /**
     * Removes all anchors from the scene (that were created via createAnchor)
     *
     * @return async status string
     */
    removeAllAnchors: () => Promise<string>;
  }

  /**
   * A persistent anchor in 3D space.
   */
  export interface PcfData {
    /**
     * Unique identifier for this anchor
     */
    anchorId: string;

    /**
     * The anchor's position and orientation.
     */
    pose: Pose;

    /**
     * Confidence of this anchor's pose.
     */
    confidence: Confidence;
  }

  /**
   * Contains information about the accuracy of the anchor.
   */
  export interface Confidence {
    /**
     * A confidence value (from [0, 1]) representing the confidence in the
     * PCF error within the valid radius.
     */
    confidence: number;

    /**
     * The radius (in meters) within which the confidence is valid.
     */
    validRadiusM: number;

    /**
     * The rotational error (in degrees).
     */
    rotationErrDeg: number;

    /**
     * The translation error (in meters).
     */
    translationErrM: number;
  }

  /**
   * A transform matrix (as a 16-element array)
   */
  export type Pose = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ];

}
