'use client';

import React, { useState } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, Users, AlertTriangle, Check, Sparkles, Eye } from 'lucide-react';
import { FamilyDetails, FamilyMember } from '../../lib/types';
import { calculateFamilyLayout } from '../../lib/familyLayoutEngine';

interface FamilyMembersFormProps {
  family: FamilyDetails;
  onChange: (updated: Partial<FamilyDetails>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const FamilyMembersForm: React.FC<FamilyMembersFormProps> = ({
  family,
  onChange,
  onNext,
  onBack,
}) => {
  const [newNameInput, setNewNameInput] = useState('');
  const [quickBulkInput, setQuickBulkInput] = useState('');
  const [showBulkMode, setShowBulkMode] = useState(false);

  // Compute live layout calculations
  const layout = calculateFamilyLayout(family.members);

  // Add a single member
  const handleAddMember = () => {
    if (!newNameInput.trim()) return;
    const newMember: FamilyMember = {
      id: `member-${Date.now()}-${Math.random()}`,
      name: newNameInput.trim(),
    };
    onChange({ members: [...family.members, newMember] });
    setNewNameInput('');
  };

  // Bulk add members (comma or newline separated)
  const handleApplyBulk = () => {
    if (!quickBulkInput.trim()) return;
    const splitNames = quickBulkInput
      .split(/[\n,]+/)
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    const newMembers: FamilyMember[] = splitNames.map((name) => ({
      id: `member-${Date.now()}-${Math.random()}`,
      name,
    }));

    onChange({ members: [...family.members, ...newMembers] });
    setQuickBulkInput('');
    setShowBulkMode(false);
  };

  // Remove member
  const handleRemove = (id: string) => {
    onChange({ members: family.members.filter((m) => m.id !== id) });
  };

  // Move member up/down in ordering
  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= family.members.length) return;

    const updated = [...family.members];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    onChange({ members: updated });
  };

  // Quick preset sample names for fast testing & convenience
  const handleLoadSampleNames = () => {
    const samples = [
      'દેસાઈ ગોવાભાઈ',
      'દેસાઈ આશાબેન',
      'દેસાઈ દેવિકાબેન',
      'દેસાઈ પલાબેન',
      'દેસાઈ ત્રિશાબેન',
      'દેસાઈ શ્રેયાબેન',
      'દેસાઈ હર્ષદભાઈ',
      'દેસાઈ કાંતિભાઈ',
      'દેસાઈ જગદીશભાઈ',
      'દેસાઈ ભાવનાબેન',
    ];
    const newMembers: FamilyMember[] = samples.map((name) => ({
      id: `member-${Date.now()}-${Math.random()}`,
      name,
    }));
    onChange({ members: newMembers });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 1. Family Members Header & Smart Layout Status */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon font-serifGujarati flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-saffron" />
              <span>પરિવારજનોનાં નામ ઉમેરો</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-1">
              સ્માર્ટ લેઆઉટ એન્જિન નામોની સંખ્યા મુજબ આપમેળે ૧, ૨, ૩ કે ૪ સ્તંભ (કોલમ) અને શ્રેષ્ઠ ફોન્ટ સાઇઝ ગોઠવશે.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLoadSampleNames}
            className="text-xs font-bold text-brand-saffron bg-brand-saffronLight hover:bg-brand-saffron/20 border border-brand-saffron/30 px-3 py-1.5 rounded-xl transition-all self-start sm:self-auto flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>૧૦ ઉદાહરણ નામો ઉમેરો (ટેસ્ટ)</span>
          </button>
        </div>

        {/* Smart Layout Engine Metrics Bar */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-gujarati">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">કુલ સભ્યો:</span>
            <span className="font-bold bg-white text-brand-saffron px-2.5 py-0.5 rounded-full border border-amber-200 shadow-xs">
              {family.members.length} નામો
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">આપમેળે ગોઠવેલ સ્તંભ (Columns):</span>
            <span className="font-bold bg-white text-gray-800 px-2.5 py-0.5 rounded-full border border-amber-200">
              {layout.columnCount} સ્તંભ
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">ઓટોમેટેડ ફોન્ટ સાઇઝ:</span>
            <span className="font-bold bg-white text-gray-800 px-2.5 py-0.5 rounded-full border border-amber-200">
              {layout.fontSize} px
            </span>
          </div>
        </div>

        {/* Overflow Warning if applicable */}
        {layout.hasOverflow && (
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-rose-800 font-gujarati">નામોની સંખ્યા વધુ છે</h4>
              <p className="text-xs text-rose-700 font-gujarati mt-0.5">
                {layout.overflowMessage}
              </p>
            </div>
          </div>
        )}

        {/* Add Input Bar */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="પરિવારજનનું નામ લખો (ઉદા. દેસાઈ ગોવાભાઈ)..."
              value={newNameInput}
              onChange={(e) => setNewNameInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddMember();
                }
              }}
              className="flex-1 px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-medium"
            />
            <button
              type="button"
              onClick={handleAddMember}
              disabled={!newNameInput.trim()}
              className="px-5 py-2.5 bg-brand-saffron text-white rounded-xl text-sm font-bold hover:bg-brand-saffronDark disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>ઉમેરો</span>
            </button>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowBulkMode(!showBulkMode)}
              className="text-xs text-brand-goldDark hover:underline font-bold font-gujarati"
            >
              {showBulkMode ? 'એક-એક નામ ઉમેરો' : 'એકસાથે ઘણા નામો ઉમેરો (Bulk Add)'}
            </button>
          </div>

          {/* Bulk Add Textarea */}
          {showBulkMode && (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
              <label className="block text-xs font-bold text-gray-700 font-gujarati">
                નામો અલ્પવિરામ (,) અથવા નવી લાઈનમાં પેસ્ટ કરો:
              </label>
              <textarea
                rows={3}
                placeholder="દેસાઈ ગોવાભાઈ&#10;દેસાઈ આશાબેન&#10;દેસાઈ દેવિકાબેન"
                value={quickBulkInput}
                onChange={(e) => setQuickBulkInput(e.target.value)}
                className="w-full p-3 text-xs bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleApplyBulk}
                  className="px-4 py-1.5 text-xs font-bold bg-brand-saffron text-white rounded-lg hover:bg-brand-saffronDark"
                >
                  તમામ નામો ઉમેરો
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Family Members Reorderable List */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-700 font-gujarati">
            ઉમેરેલા નામોની યાદી ({family.members.length}):
          </label>

          {family.members.length === 0 ? (
            <div className="text-center py-8 bg-brand-cream/30 border border-dashed border-gray-300 rounded-xl">
              <p className="text-xs text-gray-500 font-gujarati">
                હજુ સુધી કોઈ પરિવારજનનું નામ ઉમેરેલ નથી.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
              {family.members.map((member, index) => (
                <div
                  key={member.id}
                  className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between gap-2 group hover:border-brand-gold/60 hover:bg-white transition-colors"
                >
                  <span className="text-xs font-bold text-gray-400 font-mono w-5">
                    {index + 1}.
                  </span>
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => {
                      const updated = [...family.members];
                      updated[index] = { ...member, name: e.target.value };
                      onChange({ members: updated });
                    }}
                    className="flex-1 text-xs font-gujarati font-semibold bg-transparent focus:bg-white focus:outline-none px-1 py-0.5 rounded"
                  />

                  <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => handleMove(index, 'up')}
                      className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                      title="ઉપર ખસેડો"
                    >
                      <ArrowUp className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <button
                      type="button"
                      disabled={index === family.members.length - 1}
                      onClick={() => handleMove(index, 'down')}
                      className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                      title="નીચે ખસેડો"
                    >
                      <ArrowDown className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(member.id)}
                      className="p-1 hover:bg-rose-100 rounded text-rose-600"
                      title="દૂર કરો"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live Multi-Column Preview Layout Simulation */}
        {layout.columns.length > 0 && (
          <div className="p-4 bg-brand-charcoal text-white rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-brand-gold font-gujarati">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>કાર્ડ પર નામો કેવા દેખાશે (લાઈવ લેઆઉટ પ્રિવ્યૂ):</span>
              </span>
              <span className="text-[11px] text-gray-300">
                {layout.columnCount} સ્તંભ • {layout.fontSize}px ફોન્ટ
              </span>
            </div>

            <div
              className="grid gap-2 text-center pt-2 border-t border-gray-700"
              style={{
                gridTemplateColumns: `repeat(${layout.columnCount}, minmax(0, 1fr))`,
              }}
            >
              {layout.columns.map((col, cIdx) => (
                <div key={cIdx} className="space-y-1">
                  {col.map((name, rIdx) => (
                    <div
                      key={rIdx}
                      className="text-xs font-gujarati truncate text-gray-200"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. Family Footer Form (Phase 9) */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-maroon font-serifGujarati">
              પરિવારનું નામ અને ગામ (બોટમ બેનર)
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-0.5">
              કાર્ડના તળિયે સુવર્ણ પટ્ટીમાં સમગ્ર પરિવાર અને ગામનું નામ પ્રદર્શિત થશે.
            </p>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs font-gujarati text-gray-700 font-bold">બેનર બતાવો:</span>
            <input
              type="checkbox"
              checked={family.showFooter}
              onChange={(e) => onChange({ showFooter: e.target.checked })}
              className="w-4 h-4 text-brand-saffron rounded focus:ring-brand-saffron"
            />
          </label>
        </div>

        {family.showFooter && (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
                  પરિવારનું નામ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="ઉદા. પટેલ / દેસાઈ"
                  value={family.familyName}
                  onChange={(e) => onChange({ familyName: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-bold text-brand-maroon"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
                  મૂળ વતન / ગામનું નામ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="ઉદા. વાંકાનેર"
                  value={family.nativeVillage}
                  onChange={(e) => onChange({ nativeVillage: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
                />
              </div>
            </div>

            {/* Live Banner Preview */}
            <div className="p-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-bold text-center rounded-xl shadow-xs font-gujarati text-sm sm:text-base border border-amber-300">
              ॥ સમસ્ત {family.familyName || 'XYZ'} પરિવાર
              {family.nativeVillage ? ` (ગામ: ${family.nativeVillage})` : ''} ॥
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="bg-white p-4 rounded-2xl border border-brand-sand flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          પાછા જાઓ
        </button>

        <button
          type="button"
          onClick={onNext}
          className="px-8 py-2.5 rounded-xl bg-brand-saffron text-white text-sm font-bold hover:bg-brand-saffronDark shadow-md flex items-center gap-2"
        >
          <span>આગળ વધો (સંપૂર્ણ પૂર્વદર્શન અને એડિટર)</span>
          <Check className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
