import { DiagnosticCategory, DiagnosticMessage } from "./types";

function diag(code: number, category: DiagnosticCategory, key: string, message: string, reportsUnnecessary?: {}, elidedInCompatabilityPyramid?: boolean, reportsDeprecated?: {}): DiagnosticMessage {
    return { code, category, key, message, reportsUnnecessary, elidedInCompatabilityPyramid, reportsDeprecated };
}

const blank = diag(0, DiagnosticCategory.Message, "blank", "");

export const Diagnostics = {
    An_async_iterator_must_have_a_next_method: blank,
    The_0_property_of_an_async_iterator_must_be_a_method: blank,
    The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property: blank,
    Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: blank,
    An_iterator_must_have_a_next_method: blank,
    The_0_property_of_an_iterator_must_be_a_method: blank,
    The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property:blank,
    Did_you_forget_to_use_await:blank,
    The_declaration_was_marked_as_deprecated_here: blank,
    _0_is_deprecated: blank,
    The_signature_0_of_1_is_deprecated: blank,
    Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations: blank,
    Cannot_redeclare_block_scoped_variable_0: blank,
    Duplicate_identifier_0: blank    ,
    _0_was_also_declared_here: blank,
    and_here: blank,
    Declaration_name_conflicts_with_built_in_global_identifier_0: blank,
    Type_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: blank,
    Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: blank,
    Cannot_find_namespace_0_Did_you_mean_1: blank,
    Could_not_find_name_0_Did_you_mean_1: blank,
    Cannot_find_name_0_Did_you_mean_1: blank,
    _0_is_declared_here: blank,
    Parameter_0_cannot_reference_itself: blank,
    Parameter_0_cannot_reference_identifier_1_declared_after_it: blank,
    Cannot_find_namespace_0: blank,
    Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier: blank,
    Circular_definition_of_import_alias_0: blank,
    _0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0: blank,
    Block_scoped_variable_0_used_before_its_declaration: blank,
    Class_0_used_before_its_declaration: blank,
    Enum_0_used_before_its_declaration: blank,
    Cannot_find_name_0_Did_you_mean_the_static_member_1_0: blank,
    Cannot_find_name_0_Did_you_mean_the_instance_member_this_0: blank,
    _0_only_refers_to_a_type_but_is_being_used_as_a_value_here: blank,
    _0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later: blank,
    _0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Did_you_mean_to_use_1_in_0: blank,
    _0_has_no_exported_member_named_1_Did_you_mean_2: blank,
    Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1: blank,
    Namespace_0_has_no_exported_member_1: blank,
    _0_is_referenced_directly_or_indirectly_in_its_own_type_annotation:blank,
    _0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: blank,
    Rest_types_may_only_be_created_from_object_types: blank,
    No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer: blank,
    Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_1_or_later: blank,
    Cannot_find_name_0_Did_you_mean_to_write_this_in_an_async_function: blank,
    Cannot_find_name_0: blank,
    Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_include_dom: blank,
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slashjquery_and_then_add_jquery_to_the_types_field_in_your_tsconfig: blank,
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slashjquery: blank,
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_types_Slashjest_or_npm_i_save_dev_types_Slashmocha_and_then_add_jest_or_mocha_to_the_types_field_in_your_tsconfig: blank,
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_types_Slashjest_or_npm_i_save_dev_types_Slashmocha: blank,
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashnode_and_then_add_node_to_the_types_field_in_your_tsconfig: blank,
    Property_0_was_also_declared_here: blank,
    Duplicate_property_0: blank,
    Type_of_property_0_circularly_references_itself_in_mapped_type_1:blank,
    _0_is_referenced_directly_or_indirectly_in_its_own_base_expression: blank,
    Type_0_is_not_a_constructor_function_type: blank,
    Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1: blank,
    No_base_constructor_has_the_specified_number_of_type_arguments: blank,
    Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_known_members: blank,
    Type_0_recursively_references_itself_as_a_base_type:blank   ,
    Type_parameter_0_has_a_circular_constraint: blank,
    Circularity_originates_in_type_at_this_location: blank,
    Return_type_annotation_circularly_references_itself: blank,
    _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: blank,
    Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: blank,
    Type_arguments_for_0_circularly_reference_themselves: blank,
    Tuple_type_arguments_circularly_reference_themselves:blank,
    Expected_0_type_arguments_provide_these_with_an_extends_tag:blank,
    Generic_type_0_requires_1_type_argument_s:blank,
    Expected_0_1_type_arguments_provide_these_with_an_extends_tag:blank,
    Generic_type_0_requires_between_1_and_2_type_arguments:blank,
    Type_0_is_not_generic: blank,
    Cannot_find_global_value_0: blank,
    Cannot_find_global_type_0:blank,
    Global_type_0_must_have_1_type_parameter_s:blank,
    Global_type_0_must_be_a_class_or_interface_type:blank,
    Type_produces_a_tuple_type_that_is_too_large_to_represent:blank,
    Expression_produces_a_tuple_type_that_is_too_large_to_represent:blank        ,
    Expression_produces_a_union_type_that_is_too_complex_to_represent:blank,
    Cannot_assign_to_0_because_it_is_a_read_only_property: blank,
    A_tuple_type_cannot_be_indexed_with_a_negative_value:blank,
    Tuple_type_0_of_length_1_has_no_element_at_index_2:blank,
    Property_0_does_not_exist_on_type_1:blank,
    Type_0_is_generic_and_can_only_be_indexed_for_reading:blank,
    Type_0_cannot_be_used_to_index_type_1:blank,
    Type_0_cannot_be_used_as_an_index_type:blank,
    Property_0_does_not_exist_on_type_1_Did_you_mean_to_access_the_static_member_2_instead:blank,
    Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number:blank,
    Property_0_does_not_exist_on_type_1_Did_you_mean_2:blank,
    Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_Did_you_mean_to_call_1:blank,
    No_index_signature_with_a_parameter_of_type_0_was_found_on_type_1:blank,
    Element_implicitly_has_an_any_type_because_expression_of_type_0_can_t_be_used_to_index_type_1:blank,
    Type_0_has_no_matching_index_signature_for_type_1:blank,
    Index_signature_in_type_0_only_permits_reading:blank,
    Type_instantiation_is_excessively_deep_and_possibly_infinite:blank,
    _0_needs_an_explicit_type_annotation:blank,
    The_containing_function_or_module_body_is_too_large_for_control_flow_analysis:blank,
    Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator:blank,
    Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator:blank,
    Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_for_of_will_always_send_0:blank,
    Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_spread_will_always_send_0:blank,
    Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_destructuring_will_always_send_0:blank,
    Cannot_delegate_iteration_to_value_because_the_next_method_of_its_iterator_expects_type_1_but_the_containing_generator_will_always_send_0:blank,
    Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator:blank,
    Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator:blank,
    Type_0_can_only_be_iterated_through_when_using_the_downlevelIteration_flag_or_with_a_target_of_es2015_or_higher:blank,
    Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_This_is_an_instance_of_class_2:blank,
    Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses:blank    ,
    Rest_parameter_0_implicitly_has_an_any_type:blank,
    Parameter_0_implicitly_has_an_1_type:blank,
    Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage:blank,
    Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage:blank,
    Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1:blank,
    Member_0_implicitly_has_an_1_type:blank,
    Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage:blank,
    Binding_element_0_implicitly_has_an_1_type:blank,
    Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_type_of_the_target:blank,
    The_expected_type_comes_from_this_index_signature:blank,
    The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1:blank,
    
}