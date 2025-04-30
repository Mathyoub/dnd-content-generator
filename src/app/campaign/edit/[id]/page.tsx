"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Layout from "@/components/Layout";
import type { CampaignSetting, CampaignTheme, CampaignTone, MagicCommonality, GeographicalScale, CivilizationState, CommonLandscape, TechnologyLevel, RoleOfReligion, ReligiousFiguresPerception } from "@/types/campaign";

const themeOptions: CampaignTheme[] = ['fantasy', 'western', 'horror'];
const toneOptions: CampaignTone[] = ['serious', 'lighthearted', 'gritty', 'epic'];
const magicCommonalityOptions: MagicCommonality[] = [
  'Rare and Feared',
  'Widespread and Accepted',
  'Occasionally Seen',
  'Forbidden',
];
const geographicalScaleOptions: GeographicalScale[] = [
  'Single City',
  'Single Region/Continent',
  'Global',
  'Multiple Worlds/Planes',
];
const civilizationStateOptions: CivilizationState[] = [
  'Advanced and Thriving',
  'Decaying and Fragmented',
  'On the Brink of Collapse',
  'Primitive/Tribal',
];
const commonLandscapesOptions: CommonLandscape[] = [
  'Deserts',
  'Forests',
  'Mountains',
  'Swamps',
  'Urban Sprawl',
  'Islands',
  'Tundra',
  'Plains',
  'Caverns',
];
const technologyLevelOptions: TechnologyLevel[] = [
  'Primitive',
  'Early Medieval',
  'Late Medieval',
  'Renaissance',
  'Industrial',
  'Steampunk',
  'Magical Devices',
  'High-tech/Futuristic',
];
const roleOfReligionOptions: RoleOfReligion[] = [
  'Powerful and Intervening',
  'Local and Personal',
  'Non-existent',
  'Mysterious',
  'Minor Influence',
];
const religiousFiguresPerceptionOptions: ReligiousFiguresPerception[] = [
  'Revered',
  'Feared',
  'Neutral',
  'In Conflict with Other Beliefs',
  'Outlawed',
];

export default function EditCampaign() {
  const router = useRouter();
  const params = useParams();
  const campaignId = params?.id as string;
  const [settings, setSettings] = useState<CampaignSetting | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [saving, setSaving] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!campaignId) return;
    fetch(`/api/campaign/${campaignId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch campaign");
        return res.json();
      })
      .then((data) => {
        setSettings(data);
        setLoading(false);
      })
      .catch((err) => {
        setApiError(err.message);
        setLoading(false);
      });
  }, [campaignId]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!settings?.name?.trim()) newErrors.name = "Campaign name is required.";
    if (!settings?.theme) newErrors.theme = "Theme is required.";
    if (!settings?.tone || settings.tone.length === 0) newErrors.tone = "At least one tone is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSaving(true);
    try {
      const response = await fetch(`/api/campaign/${campaignId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!response.ok) {
        const err = await response.json();
        setApiError(err.error || "Failed to update campaign");
        setSaving(false);
        return;
      }
      const updated = await response.json();
      localStorage.setItem("campaignSettings", JSON.stringify(updated));
      router.push(`/campaign/${campaignId}`);
    } catch (err) {
      setApiError("Failed to update campaign");
      setSaving(false);
    }
  };

  const handleDeleteCampaign = async () => {
    if (!campaignId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/campaign/${campaignId}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/campaign/list');
      } else {
        setDeleting(false);
        alert('Failed to delete campaign');
      }
    } catch {
      setDeleting(false);
      alert('Failed to delete campaign');
    }
  };

  // Add handlers for tone and commonLandscapes
  const handleToneChange = (tone: CampaignTone) => {
    if (!settings) return;
    setSettings((prev) => prev && ({
      ...prev,
      tone: prev.tone.includes(tone)
        ? prev.tone.filter((t) => t !== tone)
        : [...prev.tone, tone],
    }));
  };
  const handleCommonLandscapesChange = (landscape: CommonLandscape) => {
    if (!settings) return;
    setSettings((prev) => prev && ({
      ...prev,
      commonLandscapes: prev.commonLandscapes?.includes(landscape)
        ? prev.commonLandscapes.filter((l) => l !== landscape)
        : [...(prev.commonLandscapes || []), landscape],
    }));
  };

  if (loading) return <div className="text-center text-gray-700 py-12">Loading campaign...</div>;
  if (!settings) return <div className="text-center text-red-500 py-12">Campaign not found.</div>;

  // You can copy the form fields from your new campaign page, but pre-fill with settings and update on change
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Campaign</h1>
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Campaign
            </button>
            <button
              type="submit"
              form="campaign-form"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
        {apiError && <div className="text-red-500 mb-4">{apiError}</div>}
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50">
            <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full text-gray-900">
              <h3 className="text-lg font-semibold mb-4">Delete Campaign</h3>
              <p className="mb-6">Are you sure you want to delete this campaign? This action cannot be undone.</p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 rounded bg-gray-200 text-gray-900 hover:bg-gray-300"
                  onClick={() => setShowDeleteModal(false)}
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                  onClick={handleDeleteCampaign}
                  disabled={deleting}
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        )}
        <form id="campaign-form" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
              Theme <span className="text-red-500">*</span>
            </label>
            <select
              id="theme"
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value as CampaignTheme })}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              {themeOptions.map((option) => (
                <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
              ))}
            </select>
            {errors.theme && <div className="text-red-500 text-sm mt-1">{errors.theme}</div>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tone <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {toneOptions.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.tone.includes(option)}
                    onChange={() => handleToneChange(option)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-900">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </label>
              ))}
            </div>
            {errors.tone && <div className="text-red-500 text-sm mt-1">{errors.tone}</div>}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="homebrew"
              checked={settings.homebrewAllowed}
              onChange={(e) => setSettings({ ...settings, homebrewAllowed: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="homebrew" className="ml-2 block text-sm text-gray-700">
              Allow Homebrew Content
            </label>
          </div>
          <div>
            <label htmlFor="magicCommonality" className="block text-sm font-medium text-gray-700 mb-2">
              Magic Commonality
            </label>
            <select
              id="magicCommonality"
              value={settings.magicCommonality || ''}
              onChange={(e) => setSettings({ ...settings, magicCommonality: e.target.value as MagicCommonality })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select...</option>
              {magicCommonalityOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="geographicalScale" className="block text-sm font-medium text-gray-700 mb-2">
              Geographical Scale
            </label>
            <select
              id="geographicalScale"
              value={settings.geographicalScale || ''}
              onChange={(e) => setSettings({ ...settings, geographicalScale: e.target.value as GeographicalScale })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select...</option>
              {geographicalScaleOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="civilizationState" className="block text-sm font-medium text-gray-700 mb-2">
              Civilization State
            </label>
            <select
              id="civilizationState"
              value={settings.civilizationState || ''}
              onChange={(e) => setSettings({ ...settings, civilizationState: e.target.value as CivilizationState })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select...</option>
              {civilizationStateOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Common Landscapes
            </label>
            <div className="flex flex-wrap gap-4">
              {commonLandscapesOptions.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.commonLandscapes?.includes(option) || false}
                    onChange={() => handleCommonLandscapesChange(option)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-900">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="technologyLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Technology Level
            </label>
            <select
              id="technologyLevel"
              value={settings.technologyLevel || ''}
              onChange={(e) => setSettings({ ...settings, technologyLevel: e.target.value as TechnologyLevel })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select...</option>
              {technologyLevelOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="roleOfReligion" className="block text-sm font-medium text-gray-700 mb-2">
              Role of Religion
            </label>
            <select
              id="roleOfReligion"
              value={settings.roleOfReligion || ''}
              onChange={(e) => setSettings({ ...settings, roleOfReligion: e.target.value as RoleOfReligion })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select...</option>
              {roleOfReligionOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="religiousFiguresPerception" className="block text-sm font-medium text-gray-700 mb-2">
              Religious Figures Perception
            </label>
            <select
              id="religiousFiguresPerception"
              value={settings.religiousFiguresPerception || ''}
              onChange={(e) => setSettings({ ...settings, religiousFiguresPerception: e.target.value as ReligiousFiguresPerception })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select...</option>
              {religiousFiguresPerceptionOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="majorConflictsThreats" className="block text-sm font-medium text-gray-700 mb-2">
              Major Conflicts or Threats
            </label>
            <textarea
              id="majorConflictsThreats"
              value={settings.majorConflictsThreats || ''}
              onChange={(e) => setSettings({ ...settings, majorConflictsThreats: e.target.value })}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white"
              placeholder="Describe key conflicts or threats, such as wars, ancient prophecies, dark forces..."
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}