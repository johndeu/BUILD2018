// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// </auto-generated>

namespace Microsoft.Media.Encoding.Rest.ArmClient.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// A class to encapsulate all the filters for a source.
    /// </summary>
    public partial class Filters
    {
        /// <summary>
        /// Initializes a new instance of the Filters class.
        /// </summary>
        public Filters()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the Filters class.
        /// </summary>
        /// <param name="pad">Gets or sets a value indicating whether to pad
        /// the source to align jagged-edge audio and video.</param>
        /// <param name="deinterlace">Gets or sets the default de-interlacing
        /// settings.</param>
        /// <param name="rotation">Gets or sets the rotation if any to be
        /// applied to the video. Possible values include: 'Auto', 'None',
        /// 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'</param>
        /// <param name="adjustLoudness">Gets or sets the loudness correction
        /// mode. Possible values include: 'None', 'Auto', 'Manual'</param>
        /// <param name="loudnessInDB">Gets or sets the Loudness specified in
        /// decibels (Applicable for the case of AdjustLoudness.Manual</param>
        /// <param name="flip">Gets or sets whether the video needs to be
        /// flipped. Possible values include: 'None', 'Horizontal',
        /// 'Vertical'</param>
        /// <param name="crop">Gets or sets the co-ordinates of the video to be
        /// cropped.</param>
        /// <param name="videoOverlay">Gets or sets the details of the video
        /// overlay to apply if any.</param>
        /// <param name="audioOverlay">Gets or sets the details of the audio
        /// overlay to apply if any.</param>
        public Filters(bool? pad = default(bool?), Deinterlace deinterlace = default(Deinterlace), Rotation? rotation = default(Rotation?), LoudnessAdjustment? adjustLoudness = default(LoudnessAdjustment?), double? loudnessInDB = default(double?), Flip? flip = default(Flip?), Rectangle crop = default(Rectangle), VideoOverlay videoOverlay = default(VideoOverlay), AudioOverlay audioOverlay = default(AudioOverlay))
        {
            Pad = pad;
            Deinterlace = deinterlace;
            Rotation = rotation;
            AdjustLoudness = adjustLoudness;
            LoudnessInDB = loudnessInDB;
            Flip = flip;
            Crop = crop;
            VideoOverlay = videoOverlay;
            AudioOverlay = audioOverlay;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets a value indicating whether to pad the source to align
        /// jagged-edge audio and video.
        /// </summary>
        [JsonProperty(PropertyName = "pad")]
        public bool? Pad { get; set; }

        /// <summary>
        /// Gets or sets the default de-interlacing settings.
        /// </summary>
        [JsonProperty(PropertyName = "deinterlace")]
        public Deinterlace Deinterlace { get; set; }

        /// <summary>
        /// Gets or sets the rotation if any to be applied to the video.
        /// Possible values include: 'Auto', 'None', 'Rotate0', 'Rotate90',
        /// 'Rotate180', 'Rotate270'
        /// </summary>
        [JsonProperty(PropertyName = "rotation")]
        public Rotation? Rotation { get; set; }

        /// <summary>
        /// Gets or sets the loudness correction mode. Possible values include:
        /// 'None', 'Auto', 'Manual'
        /// </summary>
        [JsonProperty(PropertyName = "adjustLoudness")]
        public LoudnessAdjustment? AdjustLoudness { get; set; }

        /// <summary>
        /// Gets or sets the Loudness specified in decibels (Applicable for the
        /// case of AdjustLoudness.Manual
        /// </summary>
        [JsonProperty(PropertyName = "loudnessInDB")]
        public double? LoudnessInDB { get; set; }

        /// <summary>
        /// Gets or sets whether the video needs to be flipped. Possible values
        /// include: 'None', 'Horizontal', 'Vertical'
        /// </summary>
        [JsonProperty(PropertyName = "flip")]
        public Flip? Flip { get; set; }

        /// <summary>
        /// Gets or sets the co-ordinates of the video to be cropped.
        /// </summary>
        [JsonProperty(PropertyName = "crop")]
        public Rectangle Crop { get; set; }

        /// <summary>
        /// Gets or sets the details of the video overlay to apply if any.
        /// </summary>
        [JsonProperty(PropertyName = "videoOverlay")]
        public VideoOverlay VideoOverlay { get; set; }

        /// <summary>
        /// Gets or sets the details of the audio overlay to apply if any.
        /// </summary>
        [JsonProperty(PropertyName = "audioOverlay")]
        public AudioOverlay AudioOverlay { get; set; }

    }
}